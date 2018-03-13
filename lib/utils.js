/**
 *Load module dependencies
 */
const package = require('../package.json');
const app = require('../app');
const config = require('../config/config');

/**
 *No operation function
 */
var noop = (req, res) => {
    res.json({
        message: 'to be implemented'
    })
}
/**
 *Handle all responses
 **/
var handleResponse = (res, status = 200, doc) => {
    if (!doc || doc === 404) return res.status(status).send({
        "message": "No matching document found."
    });
    res.status(status).json(doc);
}
/**
 *Handle all propagated errors
 */
var handleErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        //"error message": err.message + ' Please type the address properly',
        "error message": err.message,
        requestedUrl: req.protocol + '://' + req.hostname + req.originalUrl,
        status: err.status
    });
}
/**
 *Log message to the console window
 */
var showMsg = function(mssg) {
    console.log(mssg);
}
/**
 *format date time//use moment instead of this custom method
 */
var formatDateToString = (date) => {
    // 01, 02, 03, ... 29, 30, 31
    var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    // 01, 02, 03, ... 10, 11, 12
    var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    var yyyy = date.getFullYear();

    // create the format you want
    return (dd + "-" + MM + "-" + yyyy);
}
/**
 *Handle responses if their request not found
 */
var pageNotfound = (req, res, next) => {
    const error = new Error("Requested page not found!");
    error.status = 404;
    next(error);
}
/**
 *Handle homepage/root[page] request//try
 *to include some pratical info on this page
 */
var homepage = (req, res, next) => {
    res.json({
        "API INFO": {
            name: package.name,
            version: package.version,
            author: package.author,
            description: package.description,
            //dependecies:package.dependencies,
            //GITLAB URL
            repository: package.repository,
            deployedAt: "http://domainname-3147.herokuapp.com",
            documentationLocation: "./docs/index"
        }
    })
}

//handle express server startup
var handleServerStartup = () => {
    console.log("\nEXPRESS SERVER APP STARTED LISTENING REQUESTS ON PORT " + config.PORT + "!");
    console.log('PRESS CTRL+C TO EXIT\n');
}
/**
 *Export utilities
 */
module.exports = {
    handleResponse,
    handleErrors,
    pageNotfound,
    showMsg,
    formatDateToString,
    root: homepage,
    handleServerStartup
}
