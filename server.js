const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const AuthRouter = require('./routes/Auth');
// const PostRouter = require('./routes/PostRouter');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', AuthRouter);


app.use('/', (req, res) => {
  res.send(`Connected!`);
});

// Database connection code (appended at the end of the file)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB...');
    app.listen(PORT, () => {
      console.log(`Running Express server on Port ${PORT}...`);
    });
  })
  .catch((error) => {
    console.error('Connection error:', error.message);
  });
  console.log()