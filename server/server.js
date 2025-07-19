const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const sessionRoutes = require("./routes/sessionRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/sessions", sessionRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log("✅ Backend running on port", process.env.PORT)))
  .catch((err) => console.error("DB Connection Error:", err));
const path = require("path");

// Serve React frontend
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});
