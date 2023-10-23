// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  const iconSet = ['⭐', '🤖', '🍉'];
  const icon = iconSet[Math.floor(Math.random() * 3)];
  res.render('index', { title: 'DWPCII1', icon });
};

// GET "/about"
const about = (req, res) => {
  res.send('GET /about ⚠️');
};

// Controlador Home
export default {
  home,
  about,
};
