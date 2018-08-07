const createError = require('http-errors');
const express = require('express');
const path = require('path');

const routes = require('./routes');
const config = require('./config');

const app = express();

const CLIENT_BUILD_PATH = path.join(__dirname, '../', '/client/build');

// Serve statics if production
if (config.isProduction) {
    app.use(express.static(CLIENT_BUILD_PATH));
}

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
});

app.use(`/api/${config.apiVersion}`, routes);

// Serve statics if production
if (config.isProduction) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
    });
}
// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message || 'Internal Error',
    })
});

module.exports = app;
