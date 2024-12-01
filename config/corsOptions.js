const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: "*", // Povolit všechny originy
  credentials: true, // Povolit cookies nebo autorizaci
  optionsSuccessStatus: 200, // Vrátit úspěšný status pro preflight OPTIONS požadavky
};

module.exports = corsOptions;
