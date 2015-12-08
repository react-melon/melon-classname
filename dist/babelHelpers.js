define('melon-classname/babelHelpers', [
    'require',
    'exports',
    'module'
], function (require, exports, module) {
    var babelHelpers = {};
    babelHelpers['extends'] = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    babelHelpers.toConsumableArray = function (arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                arr2[i] = arr[i];
            return arr2;
        } else {
            return Array.from(arr);
        }
    };
    module.exports = babelHelpers;
});