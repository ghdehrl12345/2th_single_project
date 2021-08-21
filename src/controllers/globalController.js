export const maincontroller = (req, res) => {
  res.render("mains/main");
};

export const chartcontroller = (req, res) => {
  res.render("mains/chart");
};

export const rankcontroller = (req, res) => {
  res.render("mains/rank");
};

export const mypagecontroller = (req, res) => {
  res.render("mains/mypage");
};

export const topcontroller = (req, res) => {
  res.render("champs/top");
};

export const junglecontroller = (req, res) => {
  res.render("champs/jungle");
};

export const midcontroller = (req, res) => {
  res.render("champs/mid");
};

export const bottomcontroller = (req, res) => {
  res.render("champs/bottom");
};

export const supportcontroller = (req, res) => {
  res.render("champs/support");
};
