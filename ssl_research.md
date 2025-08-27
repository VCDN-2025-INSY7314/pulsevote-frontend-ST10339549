# SSL/TLS Research (PulseVote)

**Short summary (6 sentences):**  
TLS (often still called “SSL”) is the standard protocol that encrypts traffic between clients and servers so attackers can’t read or tamper with data in transit. HTTPS = HTTP running over TLS; compared to plain HTTP, it provides confidentiality, integrity, and server authenticity, and enables protections like HSTS to force secure connections. Without HTTPS, session cookies, credentials, and form data can be stolen or altered via man-in-the-middle attacks, captive portal injection, or malicious Wi-Fi access points. In the real world, failures around certificates have led to serious incidents—for example, the **DigiNotar** CA breach issued fraudulent Google certificates used for MITM against users in Iran, forcing browsers to distrust the CA entirely; likewise, Lenovo’s **Superfish** adware installed a rogue root certificate that enabled silent HTTPS interception on affected laptops. Modern guidance is to treat “SSL” as legacy and use current **TLS 1.2/1.3** with trusted CAs, correct hostname/SANs, and HSTS in production. Automated issuance via Let’s Encrypt (ACME) makes deploying browser-trusted certificates routine and reduces operational mistakes.

---

## Production note (1–2 sentences)
In production, terminate TLS at a web server or ingress (e.g., NGINX, Apache, or a cloud load balancer) with a browser-trusted CA certificate (e.g., Let’s Encrypt via ACME), enable HSTS, and keep protocols/ciphers modern (TLS 1.2/1.3). Application servers typically receive decrypted traffic from that proxy layer.

---

## Reflection
- Did enabling HTTPS change anything in your app (e.g., URLs, CORS, mixed-content warnings)?  
- Any challenges trusting the self-signed cert or configuring Vite/Node?  
- What would differ for production (e.g., CA-signed certs, NGINX termination, HSTS, cert rotation/ACME)?
