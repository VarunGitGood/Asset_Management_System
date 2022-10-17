const express = require("express");
const connection = require('./config/connection')
const dot = require("dotenv")
const cors = require('cors')
const colors = require('colors')
const errorHandler = require('./middleware/errorHandler')
dot.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;

//db connected
connection();

const app = express();
app.use(express.json());

//mounting middleware
app.use(cors())
app.use(errorHandler);


process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}\nClosing server`.bold.red);
  server.close(() => {
    process.exit(1);
  });
});

const server = app.listen(PORT, () => {
  console.log(
    `The Server is running`.bold.green
  );
});
