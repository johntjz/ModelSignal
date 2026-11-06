// ============================================================================
// MODELSIGNAL DATA LEDGER (signals.js)
// Tuple format: [id, date, signal, mode, alloc, spotAtIssue, forecastPrice, actualPrice, entryFill, exitFill, seal]
// ============================================================================
window.MODEL_SIGNAL_DATA = Object.freeze({
  asOfDate: "06 NOV 2026 // 03:36 UTC",

  history: Object.freeze({
    "BTC-USD": [
      ["BTC-01", "Oct 29 AM", "HOLD 50%",     "LONG", 0.50, 80050.00, 80495.00, 81085.88, 80050.00, 81085.88, "656737"],
      ["BTC-02", "Oct 29 PM", "HOLD 50%",     "LONG", 0.50, 81085.88, 81650.00, 79993.11, 81085.88, 79993.11, "832801"],
      ["BTC-03", "Oct 30 AM", "HOLD 50%",     "LONG", 0.50, 79993.11, 79650.00, 77792.42, 79993.11, 79400.00, "142195"],
      ["BTC-04", "Oct 30 PM", "WAIT IN CASH", "CASH", 0.00, 77792.42, 76800.00, 76954.25, null,     null,     "155497"],
      ["BTC-05", "Oct 31 AM", "WAIT IN CASH", "CASH", 0.00, 76954.25, 76100.00, 77381.96, null,     null,     "296889"],
      ["BTC-06", "Oct 31 PM", "WAIT IN CASH", "CASH", 0.00, 77381.96, 76850.00, 77359.44, null,     null,     "308582"],
      ["BTC-07", "Nov 02",    "WAIT IN CASH", "CASH", 0.00, 77359.44, 76900.00, 76545.70, null,     null,     "804195"],
      ["BTC-08", "Nov 03",    "WAIT IN CASH", "CASH", 0.00, 76545.70, 75800.00, 75832.72, null,     null,     "369798"],
      ["BTC-09", "Nov 04",    "WAIT IN CASH", "CASH", 0.00, 75832.72, 75100.00, 80561.02, null,     null,     "400727"],
      ["BTC-10", "Nov 06",    "BUY 50%",      "LONG", 0.50, 80561.02, 81400.00, 75689.97, 80561.02, 75689.97, "378602"]
    ],

    "SOXL": [
      ["SOXL-01", "Oct 29 AM", "WAIT IN CASH", "CASH", 0.00, 101.08, 96.65,  107.35, null,   null,   "316115"],
      ["SOXL-02", "Oct 29 PM", "WAIT IN CASH", "CASH", 0.00, 107.35, 104.20, 100.25, null,   null,   "015036"],
      ["SOXL-03", "Oct 30 AM", "BUY 50%",      "LONG", 0.50, 100.25, 103.80, 102.39, 100.25, 102.39, "682249"],
      ["SOXL-04", "Oct 30 PM", "BUY 50%",      "LONG", 0.50, 84.77,  89.50,  79.83,  81.66,  79.83,  "326382"],
      ["SOXL-05", "Oct 31 AM", "WAIT IN CASH", "CASH", 0.00, 79.83,  76.50,  77.05,  null,   null,   "280147"],
      ["SOXL-06", "Nov 02",    "WAIT IN CASH", "CASH", 0.00, 77.05,  74.80,  68.17,  null,   null,   "835070"],
      ["SOXL-07", "Nov 03",    "BUY 50%",      "LONG", 0.50, 68.17,  71.50,  73.12,  68.17,  73.12,  "038872"],
      ["SOXL-08", "Nov 04",    "WAIT IN CASH", "CASH", 0.00, 73.12,  66.50,  66.68,  null,   null,   "346917"],
      ["SOXL-09", "Nov 05",    "WAIT IN CASH", "CASH", 0.00, 66.68,  64.80,  40.87,  null,   null,   "721459"]
    ]
  }),

  live: Object.freeze({
    "BTC-USD": Object.freeze({
      priceNow: 75689.97,
      priceNote: "-5.63% (24H Low: $75,088.39)",
      isUp: false,
      nextSignalId: "BTC-11",
      action: "WAIT IN CASH",
      alloc: 0.00,
      orderRefPrice: 75689.97,
      forecastTomorrow: 76450.00
    }),
    "SOXL": Object.freeze({
      priceNow: 40.87,
      priceNote: "-38.71% (AH: $43.60 +6.68%)",
      isUp: false,
      nextSignalId: "SOXL-10",
      action: "BUY 50%",
      alloc: 0.50,
      orderRefPrice: 43.60,
      forecastTomorrow: 45.20
    })
  })
});
