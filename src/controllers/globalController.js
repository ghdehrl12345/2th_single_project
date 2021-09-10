const User = require("../models/User");

const testloginController = (req, res) => {
  res.render("login/login");
};

const mainController = (req, res) => {
  res.render("mains/main");
};

const chartController = (req, res) => {
  res.render("mains/chart");
};

const rankController = (req, res) => {
  res.render("mains/rank");
};

const mypageController = (req, res) => {
  res.render("mains/mypage");
};

const topController = (req, res) => {
  res.render("champs/top");
};

const jungleController = (req, res) => {
  res.render("champs/jungle");
};

const midController = (req, res) => {
  res.render("champs/mid");
};

const bottomController = (req, res) => {
  res.render("champs/bottom");
};

const supportController = (req, res) => {
  res.render("champs/support");
};

const createsigninController = (req, res) => {
  res.render("login/signin");
};

const loginController = (req, res) => {
  const loginFlog = req.userLoginFlag || false;

  let isAuthenticated = false;

  if (loginFlog) {
    isAuthenticated = true;
  }

  if (isAuthenticated) {
    mainController(req, res);
  } else {
    res.render("mains/chart");
  }
};

const signinController = async (req, res) => {
  const sess = req.session;

  let loginFlag = false;

  const input_id = req.body.input_id;
  let input_pass = req.body.input_pass;
  input_pass = String(input_pass);

  try {
    const result = await User.find();

    Promise.all(
      result.map((user) => {
        if (user.userId === input_id && user.userPassword === input_pass) {
          loginFlag = true;

          sess.userId = user._id;
        }
      })
    );
    req.userLoginFlag = loginFlag;
    console.log("[SYSTEM] 사용자가 로그인을 하였습니다.");
    loginController(req, res);
  } catch (e) {
    console.log("[SYSTEM] 사용자가 로그인을 시도하였지만 에러가 발생했습니다.");
    loginController(req, res);
  }
};

const globalController = {
  mainController,
  chartController,
  rankController,
  mypageController,
  topController,
  jungleController,
  midController,
  bottomController,
  supportController,
  testloginController,
  loginController,
  signinController,
  createsigninController,
};

module.exports = globalController;
