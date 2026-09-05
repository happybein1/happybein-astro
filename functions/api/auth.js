// Cloudflare Pages Function: /api/auth
// Step 1 of the GitHub OAuth handshake Decap CMS needs to sign in from
// happybein.com/admin. This is a serverless function bundled with the
// existing Cloudflare Pages deploy — no separate server, free on the
// standard Pages plan.
//
// Requires two environment variables set in the Cloudflare Pages project
// (Settings → Environment variables), NOT committed to the repo:
//   GITHUB_OAUTH_CLIENT_ID
//   GITHUB_OAUTH_CLIENT_SECRET
// from a GitHub OAuth App (Settings → Developer settings → OAuth Apps)
// with callback URL https://happybein.com/api/callback

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const redirectUri = `${url.origin}/api/callback`;
  const state = crypto.randomUUID();

  const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
  authorizeUrl.searchParams.set('client_id', env.GITHUB_OAUTH_CLIENT_ID);
  authorizeUrl.searchParams.set('redirect_uri', redirectUri);
  authorizeUrl.searchParams.set('scope', 'repo');
  authorizeUrl.searchParams.set('state', state);

  const headers = new Headers({ Location: authorizeUrl.toString() });
  // Short-lived cookie so /api/callback can confirm the state param round-trips
  // unmodified (CSRF protection on the OAuth flow).
  headers.append(
    'Set-Cookie',
    `decap_oauth_state=${state}; Path=/; Max-Age=600; HttpOnly; Secure; SameSite=Lax`
  );

  return new Response(null, { status: 302, headers });
}
