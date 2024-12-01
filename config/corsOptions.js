const corsOptions = {
  origin: "*", // Frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = corsOptions;
