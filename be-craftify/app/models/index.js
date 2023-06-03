const dbconfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
    mongoose, url: dbconfig.url,
    design: require('./design.model.js')(mongoose)
}