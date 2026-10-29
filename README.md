# JLS Boots

Boot release website for jlsboots.com. Plain HTML, no build step. Hosted on GitHub Pages.

- `config.js` holds every setting: phone, email, prices, Stripe payment links, drop-off addresses.
- `release.html` is where customers pick their boot number, enter vehicle info, and go to Stripe.
- `success.html` is where Stripe sends them after paying: return deadline and drop-off locations.

Release codes are never stored on this site. Put each boot's code in that boot's Stripe Payment Link confirmation message.
