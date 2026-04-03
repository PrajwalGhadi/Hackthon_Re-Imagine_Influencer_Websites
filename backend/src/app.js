const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db.confg");

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

const postRoutes = require("./routers/router");

app.use("/api", postRoutes);

module.exports = app;
