// server/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
