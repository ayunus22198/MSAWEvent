const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const keys = require('../config/keys');
const reviewRoutes = require('./models/Reviews');
const eventRoutes = require('./models/Events');
const userRoutes = require('./models/Users');
const xss = require('xss-clean');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
mongoose.Promise = global.Promise; // let's us use then catch
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb+srv://admin:${process.env.mongoPassword}@cluster0-vdkq2.mongodb.net/MSAW?retryWrites=true&w=majority`, { useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.log(err)); // to use routes

const app = express();

//lets us access/write JSON objects and push to database
app.use(bodyParser.json({limit: '10kb'}));
app.use(bodyParser.urlencoded({limit: '10kb', extended: true, parameterLimit:50000}));
app.use(xss());
app.use(mongoSanitize());
app.use(morgan('dev')); //debugging for HTTP requests

app.get('/', (req, res) =>{
    res.send('Hello World');
 });

 // pass in an array of routes
 app.use('/api', [reviewRoutes, eventRoutes, userRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is listening on PORT: ${PORT}`));
