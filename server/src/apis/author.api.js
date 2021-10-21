var express = require("express");
const { simpleRestAPI } = require("../utils");
var app = express();

module.exports = simpleRestAPI(app, require("../fixtures/author.json"));
