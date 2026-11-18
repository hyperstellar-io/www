import type { Landing } from "./types";

const invoflow: Landing = {
  status: "Closed beta",
  closing: "Invoicing, collections and a clear view of your money, in one place. Invoflow is in closed beta. Join the waitlist and we will let you know when it opens up.",
  cta: "Join the waitlist",
  title: "Right GST on every invoice,", accent: "every time.",
  sub: "Quotes, GST invoices, payment reminders and reports for small Indian businesses, with what you owe your vendors alongside what customers owe you.",
  seo: { title: "Invoflow: GST invoicing and accounts for small business", description: "Invoflow is GST invoicing and accounts software for small Indian businesses. Quotes, invoices, reminders and reports in one place. Closed beta." },
  lead: "Send the right GST invoice, get paid sooner, and see what you owe and are owed in one place.",
  problem: [
    ["Tax worked out by hand", "Is this sale CGST and SGST or IGST? Someone has to work it out every single time, and then look up the HSN code."],
    ["Retyping and chasing", "The quote gets retyped into an invoice. Payment chasing happens from memory or a phone call. Vendor bills live in another file."],
    ["A messy month end", "At month end we assemble GSTR-1 data and a profit and loss from scattered sheets, and nobody can say who changed what."],
  ],
  pillars: [
    { title: "Invoices that get the tax right", outcome: "Fewer tax mistakes and less manual arithmetic on every invoice.", points: [
      "Create a GST invoice and have the CGST and SGST or IGST split suggested by comparing your customer's state with yours.",
      "Add HSN or SAC codes to each line, searching a built-in list for the code and rate.",
      "Apply a discount the way GST rules expect, before tax, with shipping charged outside tax.",
    ] },
    { title: "Less retyping, faster turnaround", outcome: "A quote becomes an invoice and goes out in minutes.", points: [
      "Create a quotation and turn it into an invoice in one click.",
      "Download any document as a PDF and email invoices and quotations to customers.",
      "Bring past invoices in from an Excel sheet instead of retyping them.",
    ] },
    { title: "Get paid without the chasing", outcome: "Customers can pay quickly, and follow-ups happen without someone remembering.", points: [
      "Add an online payment link to an invoice. The payment is recorded when it is confirmed, once you connect your own payment gateway account.",
      "Set reminder emails before and after the due date, on days you choose for your company.",
      "Set up recurring invoices that go out weekly, monthly, quarterly or yearly.",
    ] },
    { title: "See where you stand", outcome: "You know who to chase, what to pay and what to hand your accountant.", points: [
      "Open a dashboard of what you are owed and what you owe.",
      "Run profit and loss and aging reports for both customers and vendors.",
      "Run a GSTR-1 report to help prepare your filing, and see a history of reports you have generated.",
    ] },
  ],
  days: [
    { who: "Meera, owner of a six-person packaging supplier in Pune", story: "A buyer in Gujarat asks for a quote. She creates a quotation and emails the PDF. When it is approved she converts it to an invoice in one click, and because the buyer's state differs, the inter-state IGST treatment is proposed.", change: "the invoice is out in minutes with the right tax." },
    { who: "Rahul, accountant for a trading firm", story: "Before month end he opens the aging report to see which customers are overdue, then checks the GSTR-1 report.", change: "he knows who to call and has filing data ready without assembling sheets." },
    { who: "Anita, a new staff member", story: "She enters invoices and customers but cannot see vendor bills or payments. The owner can check the activity log.", change: "work is delegated safely." },
  ],
  groups: [
    { name: "Get invoices right and get them out", features: [
      ["GST invoices", "Automatic CGST and SGST or IGST split, HSN or SAC codes on each line, discount before tax, shipping outside tax."],
      ["Quotations", "Create a quote, send it, and convert it to an invoice in one click."],
      ["PDF and email", "Download any document as a PDF and email invoices and quotations to customers."],
      ["Import past invoices", "Bring existing invoices in from an Excel sheet."],
      ["Vendor credit notes", "Record a credit note against a vendor bill for a purchase return, then apply it or record a refund."],
    ] },
    { name: "Get paid", features: [
      ["Online payment link", "Customers pay from a link on the invoice, and the payment is recorded when it is confirmed."],
      ["Payment reminders", "Reminder emails before and after the due date, on days you choose."],
      ["Recurring invoices", "Weekly, monthly, quarterly or yearly, with suggestions of customers whose billing looks recurring."],
      ["Payment methods", "Record cash, UPI, bank, card and cheque payments."],
    ] },
    { name: "Know where you stand", features: [
      ["Dashboard", "What you are owed and what you owe, at a glance."],
      ["Reports", "Profit and loss, aging for customers and vendors, and GSTR-1 with a history of past reports."],
      ["Vendor bills and payments", "Track bills with attachments, payments and balances next to your sales."],
      ["Search and export", "Global search, plus export to CSV or one full workbook so you are never locked in."],
    ] },
    { name: "Run it as a team", features: [
      ["Three access levels", "Owner, Admin and Staff. Vendor bills, payments and credit notes are hidden from Staff."],
      ["Activity log", "See who changed what."],
      ["Quick setup", "A guided setup wizard and checklist, a product tour, and bulk import of items, customers and vendors from Excel."],
      ["English and Hindi", "Use it in either language, and on your phone."],
      ["Optional AI assistant", "Ask questions about your own figures. It is read-only and uses an AI provider account your business supplies."],
    ] },
  ],
  forWho: [
    "Owners of small Indian businesses that sell goods or services with GST.",
    "Accountants and office staff who prepare invoices, follow up payments and get books ready.",
    "Businesses that want invoicing, quotes, receivables and basic payables in one place.",
    "Teams that need different access levels for owners, admins and staff.",
  ],
  goodToKnow: [
    "Online payments need your own payment gateway account.",
    "The GSTR-1 report helps you prepare. Invoflow does not file with the government portal for you.",
  ],
  next: ["More Indian languages beyond English and Hindi are something we plan to add."],
  faq: [
    ["Does it calculate GST correctly?", "It splits tax into CGST and SGST or IGST based on the states involved, uses HSN and SAC codes and rates from a built-in list, and applies discounts before tax. We suggest your accountant checks it against your own cases in a demo."],
    ["Can I file GST returns from it?", "It gives you a GSTR-1 report to help prepare your filing. It does not file with the government portal for you."],
    ["Can customers pay online?", "Yes, through a payment link on the invoice, when you connect your own payment gateway account. Which gateways are supported is confirmed during a demo."],
    ["Is my data safe and separate from other companies?", "Each company's data is kept separate, sign-in is required, and access is limited by role. Hosting, backups and certifications are confirmed during a demo."],
    ["Can I move my existing customers and items in, and take them out again?", "Yes. You can import from Excel, and export everything to CSV or a single workbook."],
  ],
};
export default invoflow;
