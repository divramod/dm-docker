// =========== [ REQUIRE ] ===========
var colors = require("colors");
require("shelljs/global");

var image = {};

// =========== [ exports.buildImage() ] ===========
image.build = function(username, imagename, templatepath) {
    var message = "Building Image " + imagename;
    console.log(message.yellow);
    exec('sudo docker build -t ' + username + "/" + imagename + ' ' + templatepath, {
        silent: false
    });
    exec('sudo docker images', {
        silent: false
    });
}; //exports.buildImage()

// =========== [ exports.removeImage() ] ===========
image.remove = function(username, imagename) {
    exec('sudo docker rmi ' + username + "/" + imagename, {
        silent: false
    });
    exec('sudo docker images', {
        silent: false
    });
}; //exports.removeImage()

// =========== [ MODULE EXPORT ] ===========
module.exports = image;
