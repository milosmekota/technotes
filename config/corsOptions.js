const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    // Povolit originy v seznamu nebo požadavky bez originu (např. z Postmanu)
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Povolit cookies nebo autorizaci
  optionsSuccessStatus: 200, // Preflight OPTIONS status
};

module.exports = corsOptions;
