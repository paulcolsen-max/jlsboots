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

  // Boot drop-off locations (Sure Storage impound yards).
  locations: [
    {
      name: "Sure Storage — Dallas",
      address: "4025 Singleton Blvd, Dallas, TX 75212",
      hours: "Open 24 hours a day, 7 days a week",
      notes: "Place the boot in the marked JLS Boots return box at the front gate.",
    },
    {
      name: "Sure Storage — Mesquite",
      address: "4433 Interstate Hwy 30, Mesquite, TX 75150",
      hours: "Open 24 hours a day, 7 days a week",
      notes: "Place the boot in the marked JLS Boots return box at the front gate.",
    },
    {
      name: "Sure Storage — Fort Worth",
      address: "5401 Wilbarger St, Fort Worth, TX 76119",
      hours: "Open 24 hours a day, 7 days a week",
      notes: "Place the boot in the marked JLS Boots return box at the front gate.",
    },
  ],
};
