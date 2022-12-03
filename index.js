const express  = require('express');
const colors = require('colors');
var morgan = require('morgan')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const port   = process.env.PORT || 3000;
const app = express();
app.use(morgan('combined'))
app.use('/', require('./routes/index'));
app.listen(port, () => {
    console.log(`Your server listening on port ${port}`.bgBlue);
  })
