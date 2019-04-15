require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

require('./routes/middleware')(app, express);

app.listen(8000, () => console.log('listening on 8000'));
