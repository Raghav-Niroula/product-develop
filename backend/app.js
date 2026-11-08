const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "https://frontend-one-theta-35.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/videos", require("./routes/videoRoutes"));

app.get("/", (req, res) => {
  res.json({ message: "Skillset API is running" });
});

module.exports = app;
