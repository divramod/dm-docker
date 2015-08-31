var colors = require("colors");
var co = require("co");
require("shelljs/global");
var jobs = {};
var result = {};
var module_path = __dirname;

// =========== [ job.index() ] ===========
jobs.index = co.wrap(function*() {
    try {
        // =========== [ get params from user input ] ===========
        var argv2 = process.env.dmnJob || process.argv[2] || "help";
        var argv3 = process.argv[3] || undefined;
        console.log("argv2", argv2);
        console.log(process.argv);

        // =========== [ help ] ===========
        if (["help", "-help", "h", "-h"].indexOf(argv2) > -1) {
            var task = require("./tasks/help/index.js");
            yield task.start(module_path);
        }
        // =========== [ container lis ] ===========
        else if (["container", "c"].indexOf(argv2) > -1) {
            if (["list"].indexOf(argv3) > -1) {
                var job = require("./jobs/containerList/index.js");
                yield job.start(module_path);
            } else if (["run"].indexOf(argv3) > -1) {
                var job = require("./jobs/containerRun/index.js");
                yield job.start(module_path);
            }
        }
        // =========== [ test ] ===========
        else if (["test", "-test", "t", "-t"].indexOf(argv2) > -1) {
            var task = require("./tasks/test/index.js");
            yield task.start();
        }
        // =========== [ todo ] ===========
        else if (["todo"].indexOf(argv2) > -1) {
            require("dm-npm").todo(__dirname);
        }
        // =========== [ idea ] ===========
        else if (["idea"].indexOf(argv2) > -1) {
            require("dm-npm").idea(__dirname);
        }
        // =========== [ prompt ] ===========
        else if (["prompt","p"].indexOf(argv2) > -1) {
            require("dm-npm").prompt(__dirname);
        }

        // automatically add tasks here


        // =========== [ help ] ===========
        else {
            var task = require("./tasks/help/index.js");
            yield task.start(module_path);
        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }

    return Promise.resolve(result);
}); // job.index()

// =========== [ MODULE EXPORT ] ===========
//module.exports = jobs;
jobs.index();
