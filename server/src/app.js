const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const contactRoutes = require("./routes/contactRoutes");
const healthRoutes = require("./routes/healthRoutes");
const { env } = require("./config/env");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(helmet());
app.use(cors({ origin: env.clientUrl }));
app.use(express.json({ limit: "20kb" }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
);

app.use("/api/health", healthRoutes);
app.use("/api/contact", contactRoutes);
app.use(errorHandler);

module.exports = app;
