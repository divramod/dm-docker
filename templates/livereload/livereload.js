'use strict';

var port = process.argv[2];
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var watch = require("gulp-watch");
var colors = require("colors");
require("shelljs/global");

var message = "Livereload listening on Port " + port;
console.log(message.green);


var watchOptions = {};
watchOptions.name = process.argv[3];
watchOptions.verbose = true;
watchOptions.events = ["add", "addDir", "change", "unlink", "unlinkDir"];

livereload.listen({
    port: port,
    basePath: '/watch/**/*'
});

watch([
    "/watch/**/*"
], watchOptions, function(event) {
    console.log(event);
    livereload.reload("");
});
