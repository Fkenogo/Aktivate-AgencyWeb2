# AKTIVATE — Domain Cutover Plan (DRAFT — requires Founder approval)

**Task:** AKT-WEB-LAUNCH-001A · **Prepared:** 2026-11-21
**Source commit:** `7117166db42e16a7a7a7a3a4d263ea17cc913ef2` (GitHub `main`)
**Preview deployment:** https://aktivate-website-preview.fredkenogo.workers.dev (Worker version `37cd49bd-62ce-402b-850d-284beeef1175`)

> ⚠️ **No production DNS changes have been made.** This document is the prepared,
> exact change set to be executed only after Founder approval.

---

## 1. Current state (verified via public DNS, 2026-11-21)

| Record | Type | Value | Proxied? |
|---|---|---|---|
| `aktivate.bi` | NS | `ricardo.ns.cloudflare.com`, `ursula.ns.cloudflare.com` | — (zone already on Cloudflare) |
| `aktivate.bi` | A | `104.21.91.235`, `172.67.181.233` | **Yes (Cloudflare proxy)** |
| `aktivate.bi` | AAAA | `2606:4700:3031::…`, `2606:4700:3035::…` | Yes |
| `www` | A/CNAME | `104.21.91.235`, `172.67.181.233` | Yes |
| `aktivate.bi` | MX 0 | `_dc-mx.145957ebfa32.aktivate.bi` | DNS-only |
| `_dc-mx.145957ebfa32` | A | `50.87.170.107` (Bluehost/HostGator, `websitewelcome.com` range) | **DNS-only — mail delivery works** |
| `aktivate.bi` | TXT (SPF) | `v=spf1 a mx include:websitewelcome.com ~all` | — |
| `default._domainkey` | TXT | DKIM RSA key present | — |
| `_dmarc` | TXT | `v=DMARC1; p=none; rua=…@mxtoolbox.dmarc-report.com; …` | — |

**Problem found — mail client hostnames are proxied (orange cloud):**
`mail`, `smtp`, `pop`, `imap`, `webmail`, `cpanel`, `webdisk`, `autoconfig`,
`autodiscover` all resolve to Cloudflare proxy IPs instead of `50.87.170.107`.
Cloudflare's proxy does not carry SMTP (25/465/587), IMAP (143/993), POP (110/995),
so any mail client configured against those hostnames **cannot connect**. Incoming
mail delivery (MX path) still works because the MX target itself is DNS-only.

This is a pre-existing condition, not caused by this work. Correction is
recommended but **optional** for website launch; see §3.

---

## 2. Website cutover (exact changes — on Founder approval)

The zone is already on Cloudflare, and `aktivate.bi` / `www` are already proxied.
Cutover therefore does **not** touch DNS records at all — it only re-points the
Worker that serves proxied traffic:

1. **Deploy the production Worker**
   ```
   npx wrangler deploy --name aktivate-website   # same config, production name
   ```
   (Or rename the existing preview worker; a second deploy from the same `dist/`
   is preferred so the preview stays untouched for verification.)

2. **Attach the custom domain to the Worker** (Workers → aktivate-website →
   Settings → Domains & Routes → *Add Custom Domain*):
   - `aktivate.bi`
   - `www.aktivate.bi`

   Cloudflare creates the route automatically because both hostnames are already
   proxied. **No A/AAAA/CNAME/MX/TXT records are modified, and nameservers are
   unchanged.** Email configuration is untouched by this step.

3. **Verification after cutover** (browser):
   - `https://aktivate.bi/#/` — Home
   - `/#/about`, `/#/services`, `/#/work`, `/#/contact` — all five pages
   - `www.aktivate.bi` → same
   - Contact page shows direct email CTA; `/blog` redirects to Home
   - Spot-check image URLs return 200

4. **Bluehost status after cutover:** retained solely for **email hosting**
   (mailbox storage, webmail, IMAP/SMTP) exactly as today. No Bluehost
   subscription or mailbox setting is modified.

## 3. Mail DNS correction plan (optional, recommended, after Founder approval)

**Goal:** make mail *client* access work again, without touching MX targets.

Minimal correction — set each of these records to **DNS-only (grey cloud)**
pointing at `50.87.170.107`:

| Hostname | Change | Target |
|---|---|---|
| `mail` | orange → grey (A) | `50.87.170.107` |
| `smtp` | orange → grey (A) | `50.87.170.107` |
| `imap` | orange → grey (A) | `50.87.170.107` |
| `pop` | orange → grey (A) | `50.87.170.107` |
| `webmail` | orange → grey (A) | `50.87.170.107` |
| `cpanel` / `webdisk` / `autoconfig` / `autodiscover` | orange → grey (A) | `50.87.170.107` |

**Explicitly NOT changed:**
- MX record and its target `_dc-mx.145957ebfa32.aktivate.bi` (verified working)
- SPF, DKIM (`default._domainkey`), DMARC records (verified present)
- Nameservers
- Any Bluehost mailbox/subscription configuration

**Risk:** these hostnames currently proxy *some* website traffic to Bluehost;
if any client loads `mail.aktivate.bi` in a browser expecting the old site it
would instead get a connection failure on mail ports only — web (443) can be
preserved by leaving `mail` proxied if webmail-over-browser matters more than
IMAP. Recommend confirming with the Founder which mail clients the team uses
before greying cloud.

## 4. Rollback procedure

**Website rollback (immediate, no DNS dependency):**
1. Cloudflare Dashboard → Workers & Pages → `aktivate-website` → Deployments →
   **Roll back** to the previous deployment (the Bluehost-era site keeps
   functioning only if it is re-attached; see 2).
2. If the previous site was served by Bluehost directly: **remove the Worker
   custom domains** (`aktivate.bi`, `www.aktivate.bi`) from the Worker. Because
   the A/AAAA records still point at Bluehost's origin behind the proxy
   (origin IP `50.87.170.107` verified reachable), the pre-launch website
   behaviour is restored without any DNS record edits.
3. Recovery of prior Worker versions: every deploy retains a version ID
   (launch version recorded above); `wrangler rollback` or Dashboard rollback
   restores the exact prior asset bundle.

**DNS safety net:** before cutover, export the current DNS zone
(Dashboard → DNS → Export) and archive it in this repo as
`docs/launch/dns-zone-backup-2026-11-21.txt` so every record can be restored
manually if ever needed. Cloudflare zone history also keeps previous states.

**Verification of rollback:** `https://aktivate.bi` must return the previous
site (or the Bluehost origin page) and mail send/receive tests must repeat
successfully (MX path is unaffected by any of the above).

## 5. Outstanding blockers

- [ ] Founder approval for §2 (production Worker + custom domains).
- [ ] Founder decision on §3 (grey-cloud mail hostnames) and which mail clients are in use.
- [ ] Live send/receive mailbox test (needs a test mailbox credential or a founder-assisted send) — see completion report.
- [ ] Current `aktivate.bi` website content being replaced by Workers is served from Bluehost origin — confirm nothing else (subdomains, staging) depends on the apex.
