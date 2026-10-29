// ============================================================
//  JLS BOOTS — SITE SETTINGS
//  This is the ONLY file you need to edit to change prices,
//  contact info, drop-off locations, or payment links.
//  Anything in [BRACKETS] is a placeholder to fill in later.
// ============================================================

window.JLS = {
  businessName: "JLS Boots",
  phone: "[PHONE NUMBER]",
  email: "[EMAIL ADDRESS]",

  // How long the customer has to return the boot after paying.
  returnWindowHours: 24,

  // Charged if the boot is not returned in time, or is damaged.
  lateFee: 250,

  // One entry per boot. "paymentLink" is the Stripe Payment Link
  // for that boot (looks like https://buy.stripe.com/xxxx).
  // Leave it as "" until Stripe is set up; the site will show
  // a "payments coming soon" message instead of charging.
  boots: [
    { number: 1, price: 100, paymentLink: "" },
    { number: 2, price: 100, paymentLink: "" },
    { number: 3, price: 100, paymentLink: "" },
    { number: 4, price: 150, paymentLink: "" },
    { number: 5, price: 150, paymentLink: "" },
    { number: 6, price: 150, paymentLink: "" },
  ],

  // Boot drop-off locations (SureStore impound yards).
  locations: [
    {
      name: "SureStore — Dallas",
      address: "[STREET ADDRESS], Dallas, TX [ZIP]",
      hours: "Drop box available 24/7",
      notes: "Place the boot in the marked JLS Boots return box at the front gate.",
    },
    {
      name: "SureStore — Mesquite",
      address: "[STREET ADDRESS], Mesquite, TX [ZIP]",
      hours: "Drop box available 24/7",
      notes: "Place the boot in the marked JLS Boots return box at the front gate.",
    },
    {
      name: "SureStore — Fort Worth",
      address: "[STREET ADDRESS], Fort Worth, TX [ZIP]",
      hours: "Drop box available 24/7",
      notes: "Place the boot in the marked JLS Boots return box at the front gate.",
    },
  ],
};
