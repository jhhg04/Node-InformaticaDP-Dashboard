const PORT = require('./config');
const app = require('./app');

app.listen(PORT);
console.log('Server Running on port ', PORT);
