// Shared header, footer and page helpers. Settings live in config.js.
(function () {
  const C = window.JLS;
  const page = document.body.dataset.page;

  const links = [
    ["index.html", "Home", "home"],
    ["release.html", "Boot Release", "release"],
    ["locations.html", "Drop-off Locations", "locations"],
    ["faq.html", "FAQ", "faq"],
    ["contact.html", "Contact", "contact"],
  ];

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="wrap"><a class="logo" href="index.html">JLS <span>BOOTS</span></a><nav class="nav">' +
      links.map(([href, label, key]) =>
        `<a href="${href}"${key === page ? ' class="active"' : ""}>${label}</a>`).join("") +
      "</nav></div>";
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      `<div class="wrap"><p><strong>${C.businessName}</strong> · ${C.phone} · ${C.email}</p>` +
      `<p><a href="terms.html">Terms &amp; Conditions</a> · <a href="release.html">Release a Boot</a></p>` +
      `<p>&copy; ${new Date().getFullYear()} ${C.businessName}. All rights reserved.</p></div>`;
  }

  // Fill any element with data-fill="phone|email|lateFee|returnWindowHours".
  document.querySelectorAll("[data-fill]").forEach((el) => {
    const v = C[el.dataset.fill];
    el.textContent = el.dataset.fill === "lateFee" ? money(v) : v;
  });

  function money(n) { return "$" + Number(n).toFixed(2); }

  function mapLink(address) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
  }

  window.renderLocations = function (el) {
    el.innerHTML = C.locations.map((l) => `
      <div class="card loc">
        <h3>${l.name}</h3>
        <div class="addr">${l.address}</div>
        <div class="hint">${l.hours}</div>
        <p>${l.notes}</p>
        <a class="map" href="${mapLink(l.address)}" target="_blank" rel="noopener">Get directions &rarr;</a>
      </div>`).join("");
  };

  window.JLSUtil = { money };
})();
