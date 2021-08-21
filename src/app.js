import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import globalRouter from "./routers/globalRouter";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(cors());
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} , lol`);
});
