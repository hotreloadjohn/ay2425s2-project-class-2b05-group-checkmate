const app = require('./app');

const port = process.env.PORT || 3000;

require('dotenv').config();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
