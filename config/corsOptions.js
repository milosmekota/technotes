const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      // Povolit požadavky bez originu (např. Postman) nebo z povolených originů
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Povolit cookies nebo autorizaci
  optionsSuccessStatus: 200, // Vrátit úspěšný status pro preflight OPTIONS požadavky
};

module.exports = corsOptions;
