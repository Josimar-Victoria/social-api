const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/User");
const uploadRoute = require("./routes/Upload");

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/user", userRouter);
app.use("/upload", uploadRoute);

app.listen(3001, (req, res) => {
  console.log("Server running http://localhost:3001");
});
