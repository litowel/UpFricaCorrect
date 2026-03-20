# Fix 2FA JSON Error (Unexpected token '<')

## What Happened
Your online form 2FA step got HTML error instead of JSON. Common in web apps.

## Quick Fixes (Try 1 by 1)
1. **Clear Cache**: Ctrl+Shift+Delete > Clear all > Reload page > Retry form.
2. **Incognito Mode**: Ctrl+Shift+N > Submit form fresh.
3. **Disable VPN/Adblock**: Turn off extensions > Retry.
4. **Check Console**: F12 > Console/Network > Screenshot failing request (status 404/500?) > Share with support.
5. **Different Browser**: Try Chrome/Firefox/Edge.

## If Your Repo Has the Form
- Check `/api/2fa` endpoint returns JSON (test in browser).
- Add to .env: `API_URL=https://your-deployed-site.com`.
- Redeploy if on Netlify/Vercel.

## Still Stuck?
Paste console error here or contact me @litowel.

Last updated: March 2026
