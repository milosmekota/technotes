const corsOptions = {
  origin: "*", // Povolí všechny origins
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

module.exports = corsOptions;
