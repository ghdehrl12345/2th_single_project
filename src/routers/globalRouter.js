import express from "express";

import {
  chartcontroller,
  rankcontroller,
  maincontroller,
  mypagecontroller,
  topcontroller,
  junglecontroller,
  midcontroller,
  bottomcontroller,
  supportcontroller,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", maincontroller);
globalRouter.get("/chart", chartcontroller);
globalRouter.get("/rank", rankcontroller);
globalRouter.get("/mypage", mypagecontroller);
globalRouter.get("/champs/top", topcontroller);
globalRouter.get("/champs/jungle", junglecontroller);
globalRouter.get("/champs/mid", midcontroller);
globalRouter.get("/champs/bottom", bottomcontroller);
globalRouter.get("/champs/support", supportcontroller);

export default globalRouter;
