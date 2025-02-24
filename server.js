require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const reviewRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/", reviewRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
