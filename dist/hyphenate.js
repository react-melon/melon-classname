define('melon-classname/hyphenate', [
    'require',
    'exports',
    'module'
], function (require, exports, module) {
    module.exports = function (source) {
        if (!source) {
            return '';
        }
        return source.replace(/[A-Z]/g, function ($0) {
            return '-' + $0;
        }).slice(1).toLowerCase();
    };
});