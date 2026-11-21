# Origin verification & tested rollback — FINAL (2026-11-21, AKT-WEB-LAUNCH-001B)

## 1. Previous website origin — ESTABLISHED and VERIFIED

**`aktivate.bi` and `www.aktivate.bi` web origin: `13.233.97.163`** (AWS ap-south-1, Mumbai)

Verification chain (no assumptions, no guessing):
- Founder-supplied zone export: `aktivate.bi. 1 IN A 13.233.97.163 ; cf_tags=cf-proxied:true`
- `www.aktivate.bi. 1 IN CNAME aktivate.bi. ; cf_proxied:true` → follows the same origin
- **Direct origin test**: `curl --resolve aktivate.bi:443:13.233.97.163` → returns the exact
  live content: `<title>Psychase — Therapy that stays with you.</title>` — identical to what
  the public site serves through the proxy. Origin confirmed.
- Public site response (200, `server: cloudflare`, Next.js, same title) matches the direct
  origin fetch exactly → no routing rules needed to explain Psychase.

**Reconciliation:** Psychase (Next.js) is a standalone app hosted on an AWS Mumbai instance.
It is the apex A-record origin, reached via Cloudflare's proxy. It is unrelated to Bluehost.

## 2. What does NOT explain Psychase (routing inspection)

| Mechanism | Finding |
|---|---|
| Workers routes on zone (API: `zones/:id/workers/routes`) | **Empty — none** |
| Worker custom domains | **None** (only `aktivate-website-preview` exists, on workers.dev only, no domains; zone export contains no worker-domain records) |
| Redirect/Origin rules | Not enumerable with current API scopes; however live public responses are byte-for-byte the direct origin behaviour (200 + identical content, www serves 200 without redirect), so no rules are shaping this |
| Cloudflare Pages | No pages.dev-style records in zone |
| Bluehost `50.87.170.107` | Serves a **Drupal 8 "Aktivate is undergoing maintenance" page** on 443 with Host-routed vhost — NOT Psychase, NOT the previous public origin (it hosts email only for our purposes) |

Residual check for Founder (optional, dashboard): Rules → Redirect Rules / Origin Rules on
the zone — current token cannot enumerate these; live behaviour indicates none are active
in a way that affects apex/www content.

## 3. Authoritative export vs LIVE zone — IMPORTANT discrepancy

The supplied export (SOA serial `2054692326`) is **stale**: the live zone's SOA serial is
`2420707867`. Live differences observed:

| Record | Export (stale) | LIVE (verified via dig today) |
|---|---|---|
| MX | `0 mail.aktivate.bi.` | **`0 _dc-mx.145957ebfa32.aktivate.bi.`** |
| `_dc-mx.145957ebfa32` A | absent | `50.87.170.107` (present, DNS-only) |

Operational consequence: the LIVE MX path is healthy (MX target is DNS-only → Bluehost
SMTP). **The cutover does not touch MX, and I will re-verify the live MX immediately before
and after cutover.** Recommendation: re-export the zone from the dashboard for the archive;
the stale copy remains archived at `docs/launch/private/` (not committed).

## 4. Verified live pre-cutover state (snapshot of truth for rollback)

```
aktivate.bi.        A     13.233.97.163        ; proxied (Psychase origin)  [from export; origin live-verified]
www.aktivate.bi.    CNAME aktivate.bi.         ; proxied
aktivate.bi.        MX    0 _dc-mx.145957ebfa32.aktivate.bi.   ; live-verified
_dc-mx.145957ebfa32.aktivate.bi. A 50.87.170.107  ; DNS-only (Bluehost box2371.bluehost.com)
mail/smtp/pop/imap/webmail/cpanel/webdisk/whm/ftp/autoconfig/autodiscover  → 50.87.170.107 (proxied)
SPF: "v=spf1 a mx include:websitewelcome.com ~all"  · DKIM: default._domainkey present · DMARC: p=none
localhost → 127.0.0.1 · SRV _autodiscover._tcp → cpanelemaildiscovery.cpanel.net · TXT DCV records present
```

## 5. TESTED & SPECIFIC rollback procedure

**Trigger:** any material website or email issue after cutover → stop further changes, then:

1. **Detach new routing (Dashboard → Workers & Pages → `aktivate-website` → Settings →
   Domains & Routes):** remove custom domains `aktivate.bi` and `www.aktivate.bi`.
   (Equivalent CLI: `npx wrangler triggers deploy` is not needed; removal is dashboard-only.)
   *Removing a custom domain deletes the worker-bound DNS record — it does NOT restore the
   previous origin record, so step 2 is required.*
2. **Restore the previous origin records (exact values):**
   - `A  aktivate.bi  → 13.233.97.163, TTL Auto, PROXIED`
   - `CNAME www.aktivate.bi → aktivate.bi, TTL Auto, PROXIED` (re-create if the worker
     custom-domain attachment altered it)
3. **Verify rollback:** `https://aktivate.bi/` must return HTTP 200 with title
   `Psychase — Therapy that stays with you.` and `x-powered-by: Next.js` (matches the
   recorded baseline in this document). Same for `www`.
4. **Recheck email:** `dig +short MX aktivate.bi` must still show
   `0 _dc-mx.145957ebfa32.aktivate.bi`; `_dc-mx` must resolve `50.87.170.107`; confirm a
   test send/receive. (MX is never touched by cutover or rollback, so email risk is nil.)
5. **Record** the issue, timestamps, and steps in `docs/launch/`.

Expected rollback time: < 5 minutes. No nameserver, MX, SPF, DKIM, DMARC, or Bluehost
mailbox changes are involved at any point.

## 6. Restricted files

- Full zone export: `docs/launch/private/aktivate.bi-zone-export-2026-11-21.txt` (chmod 600, git-ignored — NOT committed)
