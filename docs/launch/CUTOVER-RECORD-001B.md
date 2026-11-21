# Cutover Execution Record — AKT-WEB-LAUNCH-001B
**Executed:** 2026-11-21 ~10:40–12:45 CAT (founder GO received and actioned)

## What was deployed

| Item | Value |
|---|---|
| Source commit | `e8cb09448185c58d3d7fea806498fc7eec1f27b1` (GitHub `main`) |
| Build | Byte-identical to the verified preview bundle (`index-BPBpunGS.js`, `index-DZ3fxQ8i.css`) |
| Production Worker | **`aktivate-website`** |
| Worker version ID | **`968e30ae-8b3c-4c57-94d5-179218bd3f06`** |
| Preview Worker | `aktivate-website-preview` — unchanged (version `7f9385a3-c147-435e-9a3c-1f284f35682f`) |

## Exact production changes (complete list)

1. **Deployed Worker** `aktivate-website` (assets-only, from `./dist` @ `e8cb094`).
2. **Created 2 Workers routes** (these ARE the domain attachments):
   - `aktivate.bi/*` → `aktivate-website` · route id `509192c0310540c88ebe7904e49d383a`
   - `www.aktivate.bi/*` → `aktivate-website` · route id `f3fb6e444ffe485386caacc47f9489b8`

**Mechanism note (deviation from original plan, safer):** the original plan was Custom
Domains, but attaching a custom domain **rewrites the existing DNS records** for the
hostname, destroying the preserved origin configuration (`A 13.233.97.163` / `CNAME www`).
The API also refused custom-domain attachment while those records exist (error 100117).
**Workers Routes** achieve the identical result (both hostnames serve the Worker over
HTTPS through the existing proxied records) with **zero DNS record changes**, and rollback
is two route deletions. The Custom-Domain conversion can be done later via the dashboard
if ever desired.

3. **No DNS records created, modified or deleted.** No nameserver changes. No zone settings changed.

## DNS verification (post-cutover, all re-checked live)

| Record | Post-cutover state | Status |
|---|---|---|
| MX `0 _dc-mx.145957ebfa32.aktivate.bi` → `50.87.170.107` (DNS-only) | **Unchanged** | ✅ |
| SPF / DKIM (`default._domainkey`) / DMARC | **Unchanged** | ✅ |
| `mail`/`smtp`/`pop`/`imap`/`webmail`/`cpanel`/`webdisk`/`whm`/`ftp`/`autoconfig`/`autodiscover` | **Unchanged** (proxied — separate follow-up per §4 of task) | ✅ |
| Apex A / www CNAME (web origin `13.233.97.163`) | **Unchanged** — routing to the Worker happens at the Cloudflare edge via routes | ✅ |

## Website verification (production)

- `https://aktivate.bi` — HTTP 200, `<title>Aktivate | Branding & Brand Management Agency</title>`, 0.59s
- `https://www.aktivate.bi` — HTTP 200, same title
- All five pages (Home, About, Expertise, Our Work, Contact) — 200, correct SEO titles, **0 console errors**
- `/#/blog` — redirects to Home (legacy blog inaccessible) ✅
- Portfolio: "All" shows all 9 items (Primus featured lead + 8 grid); category filters switch
  correctly (aria-selected moves; Campaigns/Branding/Research views verified; Research shows
  the credentials panel) ✅
- Contact: 4 × `mailto:info@aktivate.bi` links (incl. pre-filled subject), 5 × `tel:` links ✅
- Mobile (390px): hamburger menu opens with all 5 links, logo visible ✅
- Images: lazy-loaded portfolio images serve 200 from `/assets/...` ✅

## Email verification (production)

- Live MX path unchanged and healthy: MX target DNS-only → Bluehost origin.
- Origin SMTP submission (587): `220-box2371.bluehost.com ESMTP Exim 4.100.1` ✅
- Origin IMAPS (993): TLS handshake OK (Bluehost cert) ✅; submission 465 open ✅
- **True mailbox send/receive not yet performed** — requires a test mailbox credential or a
  founder-side send. All transport paths verified; see outstanding items.

## Outstanding items (non-blocking)

1. Founder mailbox send/receive test (need test credentials or a manual send).
2. Mail-client hostname correction (`mail`/`smtp`/`pop`/`imap` proxied → grey cloud) —
   separate approved change, per task §4. NOT performed in this cutover.
3. HTTP (port 80) does not auto-redirect to HTTPS on the new Worker (zone "Always Use HTTPS"
   is off). Recommend enabling it — zone settings change requiring founder approval.
4. Canonical hostname: both apex and www serve content directly (no redirect between them).
   RouteSeo emits per-host canonicals. If a single canonical host is preferred, a redirect
   rule can be added later (founder approval).
5. Zone re-export for the archive (the 10:24 export is stale; SOA 2054692326 vs live 2420707867).

## Rollback (unchanged, documented in origin-verification-2026-11-21.md §5)

Delete the two Workers routes (IDs above) → edge instantly reverts to the preserved origin
(A 13.233.97.163 / CNAME www, proxied) → verify Psychase baseline title returns → email
never affected. Expected time < 5 minutes.
