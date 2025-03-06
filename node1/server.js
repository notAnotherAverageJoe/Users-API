const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

//user routes
app.use("/api", userRoutes);

const PORT = 4500;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
