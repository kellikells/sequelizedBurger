// Dependencies
// =============================================================


var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Burger = sequelize.define("burger", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

// Syncs with DB
Burger.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Burger;


