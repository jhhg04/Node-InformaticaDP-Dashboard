const vistaPricipal = (req, res) => {
  res.render('home');
};

const vistaTables = (req, res) => {
  res.render('tables');
};

const vistaNotifications = (req, res) => {
  res.render('notifications');
};

const vistaIcons = (req, res) => {
  res.render('icons');
};

const vistaMap = (req, res) => {
  res.render('map');
};

const vistaRtl = (req, res) => {
  res.render('rtl');
};

const vistaTypography = (req, res) => {
  res.render('typography');
};

const vistaUser = (req, res) => {
  res.render('user');
};

module.exports = {
  vistaPricipal,
  vistaTables,
  vistaNotifications,
  vistaIcons,
  vistaMap,
  vistaRtl,
  vistaTypography,
  vistaUser,
};
