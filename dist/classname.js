define('melon-classname/classname', [
    'require',
    'exports',
    'module',
    './babelHelpers'
], function (require, exports, module) {
    var babelHelpers = require('./babelHelpers');
    'use strict';
    var toString = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function create() {
        var classes = [];
        for (var i = 0, len = arguments.length; i < len; i++) {
            var arg = arguments[i];
            if (!arg) {
                continue;
            }
            switch (toString.call(arg).slice(8, -1)) {
            case 'String':
            case 'Number':
                classes.push(arg);
                break;
            case 'Array':
                classes.push.apply(classes, babelHelpers.toConsumableArray(create.apply(undefined, babelHelpers.toConsumableArray(arg))));
                break;
            case 'Object':
                for (var key in arg) {
                    if (hasOwnProperty.call(arg, key) && arg[key]) {
                        classes.push(key);
                    }
                }
                break;
            }
        }
        return classes;
    }
    exports.createClasses = create;
    exports.createClassName = function () {
        return create.apply(undefined, arguments).join(' ');
    };
});