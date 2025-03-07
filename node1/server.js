const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();
const userRoutes = require("./routes/userRoutes");
const petRoutes = require("./routes/petRoutes");

app.use(express.json());
app.use(cors());

//User routes
app.use("/api", userRoutes);
//Pet routes
app.use("/api", petRoutes);

const PORT = 4500;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
