// =========== [ REQUIRE ] ===========
var colors = require("colors");
require("shelljs/global");

var container = {};

// =========== [ exports.buildImage() ] ===========
container.run = function(imagename, containername, options) {

    // remove container before starting it
    container.remove(containername);

    // create execution command
    var execCommand = '';
    execCommand += 'sudo docker run';
    if (options.parameters) {
        execCommand += ' ' + options.parameters;
    }
    // add Ports
    if (options.ports) {
        for (var i = 0, l = options.ports.length; i < l; i++) {
            var port = options.ports[i];
            execCommand += ' -p ' + port.dest + ':' + port.src;
        }
    }
    // add Volumes
    if (options.volumes) {
        for (var i = 0, l = options.volumes.length; i < l; i++) {
            var volume = options.volumes[i];
            execCommand += ' -v ' + pwd() + "/" + volume.src + ':' + "/watch/" + volume.dest;
        }
    }
    // add link
    if (options.links) {
        for (var i = 0, l = options.links.length; i < l; i++) {
            var l = options.links[i];
            execCommand += ' --link ' + l.src + ':' + l.dest;
        }
    }
    // container Name
    execCommand += ' --name ' + containername;
    // image Name
    execCommand += ' ' + imagename;
    // start Command
    if (options.command) {
        execCommand += ' ' + options.command;
    }

    console.log(execCommand.magenta);

    // run container
    exec(execCommand, {
        silent: false
    });
}; //exports.buildImage()

// =========== [ container.stop() ] ===========
// TODO
container.stop = function(containername) {
    // run container
    exec("sudo docker stop " + containername, {
        silent: false
    });
    exec('clear', {
      silent: false
    });
    exec('sudo docker ps', {
      silent: false
    });

    console.log("container.stop");
}; //container.stop()


// =========== [ container.remove() ] ===========
// TODO
container.remove = function(containername) {
    container.stop(containername);
    exec('sudo docker rm ' + containername, {
        silent: true
    });
    exec('clear', {
      silent: false
    });
    exec('sudo docker ps -a', {
      silent: false
    });
}; //container.remove()


// =========== [ MODULE EXPORT ] ===========
module.exports = container;
