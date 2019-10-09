const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const keys = require('../config/keys');
console.log(keys.mongoPassword);
mongoose.Promise = global.Promise; // let's us use then catch
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb+srv://admin:${keys.mongoPassword}@cluster0-vdkq2.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.log(err)); // to use routes

const app = express();

//lets us access/write JSON objects and push to database
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
app.use(morgan('dev')); //debugging for HTTP requests


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is listening on PORT: ${PORT}`));
