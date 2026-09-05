// Cloudflare Pages Function: /api/callback
// Step 2 of the GitHub OAuth handshake — GitHub redirects here with a
// short-lived `code`, which is exchanged server-side (using the client
// secret, which must never reach the browser) for an access token, then
// handed back to the Decap CMS admin tab via the postMessage protocol
// Decap's github backend expects.

function htmlMessage(message) {
  // JSON.stringify on the whole postMessage string lets the browser's own
  // JS parser handle escaping, rather than hand-rolling string concatenation
  // that could break on a token/error message containing quotes.
  const script = `
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(${JSON.stringify(message)}, e.origin);
        window.removeEventListener('message', receiveMessage, false);
      }
      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
  `;
  return new Response(`<!doctype html><html><body><script>${script}</script></body></html>`, {
    headers: { 'Content-Type': 'text/html' },
  });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookieState = (cookieHeader.match(/decap_oauth_state=([^;]+)/) || [])[1];

  if (!code || !state || state !== cookieState) {
    return htmlMessage('authorization:github:error:Invalid or expired sign-in attempt — please try again');
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: env.GITHUB_OAUTH_CLIENT_ID,
        client_secret: env.GITHUB_OAUTH_CLIENT_SECRET,
        code,
        redirect_uri: `${url.origin}/api/callback`,
      }),
    });
    const tokenData = await tokenRes.json();

    if (!tokenRes.ok || tokenData.error || !tokenData.access_token) {
      const reason = tokenData.error_description || tokenData.error || 'GitHub did not return an access token';
      return htmlMessage(`authorization:github:error:${reason}`);
    }

    const payload = JSON.stringify({ token: tokenData.access_token, provider: 'github' });
    return htmlMessage(`authorization:github:success:${payload}`);
  } catch (err) {
    return htmlMessage('authorization:github:error:Server error completing sign-in');
  }
}
