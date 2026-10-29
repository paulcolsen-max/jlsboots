# Getting jlsboots.com live

Four parts. Do them in order. Each takes about 5 to 15 minutes.

---

## Part 1: Create the GitHub repository (you do this once)

1. Go to https://github.com/new while signed in as **paulcolsen-max**.
2. Repository name: **jlsboots**
3. Choose **Public** (free GitHub Pages hosting needs a public repository).
4. Leave everything else as is and click **Create repository**.
5. Tell Claude "the repo is created." Claude will upload the website files into it.

---

## Part 2: Turn on GitHub Pages (free hosting)

1. Open https://github.com/paulcolsen-max/jlsboots/settings/pages
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to **main** and folder to **/ (root)**. Click **Save**.
4. In the **Custom domain** box, type **jlsboots.com** and click **Save**.
5. Wait a minute. The site will appear at https://paulcolsen-max.github.io/jlsboots/ while the domain is being connected.

---

## Part 3: Point jlsboots.com at the site

Log in where you bought jlsboots.com (GoDaddy, Namecheap, Squarespace, Google, etc.) and find **DNS settings** (sometimes called "Manage DNS" or "DNS Records").

1. **Delete** any existing **A** records for **@** (these point to a parking page).
2. **Add four A records**, all with Host/Name **@**:

   | Type | Host | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

3. **Add (or change) one CNAME record**:

   | Type | Host | Value |
   |------|------|-------|
   | CNAME | www | paulcolsen-max.github.io |

4. Save. It can take from 10 minutes to a few hours to start working.
5. Go back to https://github.com/paulcolsen-max/jlsboots/settings/pages. When it shows a green check next to the domain, tick **Enforce HTTPS**.

If your registrar screens look different, tell Claude which company you use and Claude will give you exact clicks.

---

## Part 4: Take card payments with Stripe

The site uses **Stripe Payment Links**: one link per boot. No coding needed.

1. Sign in at https://dashboard.stripe.com (or create a free account for JLS Boots and finish the business verification).
2. Go to **Payment Links** and click **New**.
3. Click **Add a new product**: Name **Boot #1 Release**, Price **$100.00**, **One time**.
4. Open the **After payment** tab and choose **Show confirmation page**. Write a custom message like:

   > Your release code for Boot #1 is **123**. Enter it starting with the wheel closest to the arrow. Return the boot within 24 hours: https://jlsboots.com/success.html?boot=1

   (Use the real code for that boot, and change the boot number in the link.)

5. Under **Options**, turn on **Collect customers' phone numbers**.
6. Click **Create link** and copy it (it looks like `https://buy.stripe.com/abc123`).
7. Repeat for each boot (Boot #2, #3 at $100; Boots #4 to #6 at $150, or whatever prices you choose).
8. Send Claude the list of links. Claude will paste them into the site. Until then, the site tells customers to call to pay.

Release codes are only shown on Stripe's confirmation screen after payment, never on the public website. If you reset a boot's lock combination, update the message on that boot's Stripe link.

Stripe emails you on every payment. The license plate is attached to each payment as the "client reference ID."

---

## What to send Claude when you have it

- Phone number and email for the site
- Street addresses of the SureStore yards in Dallas, Mesquite, and Fort Worth (and where the return box is)
- Boot numbers and prices (if different from #1 to #6 at $100 / $150)
- The Stripe Payment Links
- A logo, if you have one

Have an attorney review the Terms page before going live. Texas cities (including Dallas and Fort Worth) have their own booting rules, such as fee caps, required signage, and licensing.
