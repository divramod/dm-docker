var co = require("co");
var jobs = {};

// =========== [ job.index() ] ===========
jobs.index = co.wrap(function*() {
    try {

        // =========== [ get params from user input ] ===========
        var argv2 = process.env.dmnJob || process.argv[2] || "help";
        var argv3 = process.argv[3] || undefined;

        // =========== [ container lis ] ===========
        if (["container", "c"].indexOf(argv2) > -1) {
            if (["list"].indexOf(argv3) > -1) {
                var job = require("./jobs/containerList/index.js");
                yield job.start(module_path);
            } else if (["run"].indexOf(argv3) > -1) {
                var job = require("./jobs/containerRun/index.js");
                yield job.start(module_path);
            }
        }

        // automatically add tasks here


        // =========== [ help ] ===========
        else {
            require("dm-npm").getCommonTasks(argv2, __dirname);
        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }

    return Promise.resolve();
}); // job.index()


// =========== [ MODULE EXPORT ] ===========
module.exports = jobs;
