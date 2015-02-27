// =========== [ REQUIRE ] ===========
require("shelljs/global");
var fs = require("fs");
var image = require("./jobs/image");
var container = require("./jobs/container");

// =========== [ DEFINE ] ===========
var dmDocker = {};

// =========== [ dm-docker.start ] ===========
dmDocker.start = function() {
    var a = process.argv[2];
    if (a === "ibuild") {
        image.build(process.argv[3], process.argv[4], __dirname + "/templates/" + process.argv[4]);
    }
    if (a === "iremove") {
        image.remove(process.argv[3], process.argv[4]);
    }
    if (a === "crun") {
        //var config = JSON.parse(fs.readFileSync(__dirname + "/config.json", "utf8"));
        var config = JSON.parse(fs.readFileSync( "./config.json", "utf8"));
        container.run(process.argv[3], process.argv[4], config);
    }
    if (a === "cremove") {
        container.remove(process.argv[3]);
    }
    if (a === "cstop") {
        container.stop(process.argv[3]);
    }
}; // dm-docker.start



module.exports = dmDocker;
