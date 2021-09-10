const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const globalRouter = require("./routers/globalRouter");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("../db");
const expressSession = require("express-session");

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(cors());
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  expressSession({
    name: "codeil",
    secret: '@#@$MYSIGN#@$#$",',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} , lol`);
});
