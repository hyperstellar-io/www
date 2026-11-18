import type { Landing } from "./types";

const shelfwise: Landing = {
  status: "Closed beta",
  closing: "Shelfwise is in closed beta and has not launched publicly. Join the waitlist and we will let you know when it is ready to try.",
  cta: "Join the waitlist",
  title: "Know what's on the shelf", accent: "before the shelf knows.",
  sub: "Inventory, purchase orders, suppliers and inbound shipments in one place, with low-stock alerts and reorder suggestions you confirm yourself.",
  seo: { title: "Shelfwise: inventory and purchasing for growing businesses", description: "Shelfwise is inventory and purchasing software with low-stock alerts, forecasting, purchase orders and supplier tracking. Closed beta." },
  lead: "Know what you have, reorder what you need, and see what needs attention before a shelf runs empty.",
  problem: [
    ["Counts in spreadsheets", "Stock counts live in spreadsheets, and we only notice low stock when a shelf is empty."],
    ["Orders and updates scattered", "Purchase orders go out by email, and delivery updates arrive by WhatsApp or phone. Reordering is guesswork."],
    ["No trail when stock goes missing", "When stock goes missing there is no record of who changed what, and warehouse staff can see or change things they should not."],
  ],
  pillars: [
    { title: "Fewer stock-outs", outcome: "You see shortages early and know what to reorder.", points: [
      "Keep a product catalogue with SKUs, categories and reorder levels, and get low-stock alerts.",
      "Import products from CSV or Excel, with duplicate detection to keep the catalogue clean. The AI-assisted part needs an AI service connected.",
      "Generate and scan barcodes to look up a product.",
    ] },
    { title: "Purchasing that stays in control", outcome: "Orders go out faster, and stock updates when goods arrive.", points: [
      "Raise multi-line purchase orders with an approval and status flow, and receive them into stock.",
      "Open a printable purchase order page and save it as a PDF to send to a supplier.",
      "See a demand forecast per product, tick the suggestions you agree with, and turn them into purchase orders. You confirm. It never orders on its own.",
    ] },
    { title: "Suppliers and deliveries you can trust", outcome: "You spot unreliable suppliers and react to delays before they reach the shelf.", points: [
      "Keep supplier records with purchase history.",
      "See a supplier risk score based on how often their shipments are delayed, returned, cancelled or overdue.",
      "Track inbound shipments and see delayed or overdue ones flagged in the Risk Center.",
    ] },
    { title: "Accountability and a clear overview", outcome: "Errors and misuse are easy to trace, and the owner sees the whole picture.", points: [
      "Issue stock out with a reason, and review a full movement history showing who made each change.",
      "See unusually large withdrawals flagged for review.",
      "Open an executive dashboard with open orders, low stock, delayed shipments, inventory value, monthly spend and the value of dead stock.",
      "Give people one of four roles, with warehouse screens limited to Admin and Warehouse Manager.",
    ] },
  ],
  days: [
    { who: "Farah, procurement officer at a wholesale distributor", story: "On Monday she opens forecasting, ticks the five products that really need reordering and generates the purchase orders.", change: "ordering takes minutes rather than a day of spreadsheets, and her judgement stays in the loop." },
    { who: "Imran, warehouse manager", story: "A supplier delivery arrives. He opens the purchase order, receives it into stock and scans a barcode to check a product.", change: "stock counts are updated when the goods land." },
    { who: "Tanya, owner", story: "She notices odd stock levels, opens the audit log and finds a flagged large withdrawal with the name of the user who made it.", change: "the issue is traced in minutes." },
  ],
  groups: [
    { name: "Know what you have", features: [
      ["Product catalogue", "SKUs, categories, reorder levels and low-stock alerts."],
      ["Bulk import", "CSV or Excel import with duplicate detection."],
      ["Barcodes", "Generate barcodes and scan them to look a product up."],
      ["Warehouses", "Records with a stated capacity and a warning when one is close to full. A rack and bin label sits on each product."],
      ["Risk Center", "One list of low stock, delayed or overdue shipments, nearly full warehouses and dead stock."],
    ] },
    { name: "Buy the right amount at the right time", features: [
      ["Purchase orders", "Multi-line orders with an approval and status flow, received into stock when goods arrive."],
      ["Printable orders", "A purchase order page you can save as a PDF for your supplier."],
      ["Demand forecasting", "A forecast per product from past monthly demand. When an AI service is connected, a short plain-English recommendation too."],
      ["Reorder flow", "Pick the suggestions you agree with and turn them into purchase orders."],
      ["Suppliers", "Records, purchase history and a risk score from delayed, returned, cancelled or overdue shipments."],
      ["Inbound shipments", "Track shipments and see delay alerts."],
    ] },
    { name: "Stay in control", features: [
      ["Stock out with a reason", "Every withdrawal carries a reason and a name."],
      ["Movement history", "A full record of stock movements, with unusually large withdrawals flagged for review."],
      ["Four roles", "Admin, Inventory Manager, Warehouse Manager and Procurement Officer, enforced on every change."],
      ["Executive dashboard", "Open orders, low stock, delayed shipments, inventory value, monthly spend and dead stock value."],
      ["Reports and exports", "A reports page with charts, and CSV exports for products, orders, shipments, warehouses and suppliers."],
      ["Optional assistant", "Ask read-only questions about your own data. Needs an AI service connected."],
      ["Everyday comfort", "Dark and light themes, a currency symbol setting per user, and use on mobile."],
    ] },
  ],
  forWho: [
    "Inventory managers who need accurate stock and early warnings.",
    "Procurement officers who raise and chase purchase orders.",
    "Warehouse managers who receive goods and manage locations.",
    "Owners of a single product-based business who want one overview.",
  ],
  goodToKnow: [
    "Shelfwise is built for one business, such as a retailer, distributor or light manufacturer.",
    "It tracks inbound shipments and their status. It does not plan or optimise delivery routes.",
    "The assistant and AI-assisted import need an AI service to be connected.",
  ],
  next: ["Exporting the executive dashboard as a PDF.", "Setting up the Admin role from inside the app."],
  faq: [
    ["Can it tell me what to reorder?", "Yes. It forecasts demand per product and suggests reorders, which you confirm before any purchase order is created."],
    ["Can it optimise delivery routes?", "No. It tracks inbound shipments and their status, but does not plan or optimise routes."],
    ["Who can see and change what?", "There are four roles with permissions enforced on every change. Warehouses are limited to Admin and Warehouse Manager."],
    ["Is my data safe?", "Sign-in is required, access is by role, and stock changes are logged. The assistant can only run fixed read-only lookups on your own data. Hosting, backups and certifications are confirmed during a demo."],
    ["Can I import my existing products?", "Yes, from CSV or Excel, with duplicate detection."],
  ],
};
export default shelfwise;
