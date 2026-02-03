# Awad Tourism (Next.js)

This is a starter website for a Turkey tourism agency.

## Requirements
- Node.js >= 20.9
- npm

## Preview locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Safe edits
- Tours/programs: `data/programs.json` (single source of truth)
- Brand + WhatsApp + email + site URL: `src/lib/seo.ts`

## Security hardening included
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) in `next.config.ts`
- HTTPS-only HSTS via `src/middleware.ts` (only when request is HTTPS)
- COOP/CORP headers via middleware

## Before publishing (IMPORTANT)
1) Update `src/lib/seo.ts`:
   - url (your domain)
   - whatsapp number
   - email
2) Update `public/.well-known/security.txt` contact + policy
3) Build:
```bash
npm run build
npm run start
```

## Protect contact forms (recommended)
This demo form is frontend-only. When you connect it to a backend:
- Add rate limiting + bot protection (e.g., Turnstile/hCaptcha)
- Validate/sanitize inputs server-side
- Store secrets in environment variables (never in code)
