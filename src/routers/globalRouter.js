const express = require("express");

const {
  mainController,
  chartController,
  rankController,
  mypageController,
  topController,
  jungleController,
  midController,
  bottomController,
  supportController,
  createsigninController,
  loginController,
  signinController,
} = require("../controllers/globalController");

const globalRouter = express.Router();

globalRouter.get("/", mainController);
globalRouter.get("/chart", chartController);
globalRouter.get("/rank", rankController);
globalRouter.get("/mypage", mypageController);
globalRouter.get("/top", topController);
globalRouter.get("/jungle", jungleController);
globalRouter.get("/mid", midController);
globalRouter.get("/bottom", bottomController);
globalRouter.get("/support", supportController);
globalRouter.get("/signin", createsigninController);

globalRouter.post("/login", loginController);
globalRouter.post("/signin", signinController);

module.exports = globalRouter;
