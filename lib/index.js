var getFlexiblegsProcessor = require("./flexiblegs-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginFlexiblegs(options) {
    this.options = options;
};

LessPluginFlexiblegs.prototype = {
    install: function(less, pluginManager) {
        var FlexiblegsProcessor = getFlexiblegsProcessor();
        pluginManager.addPreProcessor(new FlexiblegsProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 4, 0]
};

module.exports = LessPluginFlexiblegs;

