const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');

require('dotenv').config();
const {
    SESSION_SECRET,
    CONNECTION_STRING,
    SERVER_PORT
} = process.env;

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.listen(SERVER_PORT, () => {console.log('things and stuff on port: ' + SERVER_PORT)})