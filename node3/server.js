const express = require("express");

const app = express();

const userRoutes = require("./controllers/userController");

app.use(express.json());

// User routes
app.use("/api", userRoutes);

const port = 4500;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
