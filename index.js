const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const router = require('./router/rotuer')
const cors = require('cors');

dotenv.config();

app.use(cors({
    credentials : true,
    origin : "*"
}))
app.use(bodyParser.json());

const DB = process.env.DB_KEY;
const Port = process.env.PORT;

mongoose.connect(DB, { useNewUrlParser: true });

app.use(express.urlencoded({ extended : false}));
app.use("/resume", router); 

const DB_Connect = mongoose.connection;

try {
  DB_Connect.on("open", () => {
    console.log("mongoose is connect");
  });
} catch (err) {
  console.log("Db is not connected");
}
 

app.listen(Port, () => {
    console.log(`server is running  http://localhost:${Port}`)
})