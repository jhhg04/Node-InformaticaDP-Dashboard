const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

const router = require('./routes/router.js');
app.use(router.routes);

// app.use('/', (req, res) => {
//   res.send('Dashboar Node JS');
// });

app.listen(3000, () => {
  console.log('Server Running on port 3000');
});
