const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require('./middleware/error.handler');

const app = express();
const port = 3000;
const whitelist = ['http://localhost:5173', 'http://localhost:3000'];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};

app.use(cors(options));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
