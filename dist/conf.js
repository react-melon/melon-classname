define('melon-classname/conf', [
    'require',
    'exports',
    'module'
], function (require, exports, module) {
    'use strict';
    module.exports = {
        COMPONENT_SIZES: [
            'xxs',
            'xs',
            's',
            'm',
            'l',
            'xl',
            'xxl',
            'xxxl'
        ],
        COMPONENT_CLASS_PREFIX: 'ui',
        COMPONENT_VARIANT_PREFIX: 'variant',
        COMPONENT_STATE_PREFIX: 'state'
    };
});