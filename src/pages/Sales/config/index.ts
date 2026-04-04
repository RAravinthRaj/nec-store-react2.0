/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
export const SALES_CONFIG = {
  pageTitle: "Inventory Reports",
  pageSubtitle:
    "Track outgoing sales and incoming stock with the same filters, sorting, totals, and download flow.",
  modes: {
    outgoing: "outgoing",
    incoming: "incoming",
  },
  chips: {
    outgoing: "Outgoing",
    incoming: "Incoming",
  },
  search: "Search",
  date: "Date : ",
  from: "From : ",
  to: "To : ",
  outgoingTotalAmount: "Total Sales : ₹  ",
  incomingTotalAmount: "Total Incoming : ₹  ",
  outgoingTotalQuantity: "Total Items Sold : ",
  incomingTotalQuantity: "Total Units Added : ",
  downloadButton: "Download Report",
  sortedOptions: ["Sort By Title Asc", "Sort By Title Desc"],
  all: "All",
  headings: {
    outgoing: [
      "Product Image",
      "Category",
      "Product Name",
      "Price(Per unit.)",
      "Sold",
      "Left",
      "Total Amount(in Rs.)",
    ],
    incoming: [
      "Product Image",
      "Category",
      "Product Name",
      "Buying Price",
      "Current Qty",
      "Stock Value(in Rs.)",
      "Last Updated",
    ],
  },
};
