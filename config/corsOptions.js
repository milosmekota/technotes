const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: "*", // Povolit všechny originy
  optionsSuccessStatus: 200, // Vrátit úspěšný status pro preflight OPTIONS požadavky
};

module.exports = corsOptions;
