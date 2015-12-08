/**
 * @file config edp-build
 * @author EFE
 */

/* globals
    LessCompiler, CssCompressor, JsCompressor,
    PathMapper, AddCopyright, ModuleCompiler,
    TplMerge, BabelProcessor,
    AmdWrapper
*/

exports.input = __dirname;

var path = require('path');
exports.output = path.resolve(__dirname, 'output');

// var moduleEntries = 'html,htm,phtml,tpl,vm,js';
// var pageEntries = 'html,htm,phtml,tpl,vm';

exports.getProcessors = function () {
    var lessProcessor = new LessCompiler();
    var cssProcessor = new CssCompressor();
    var moduleProcessor = new ModuleCompiler({
        bizId: 'melon-classname'
    });
    var jsProcessor = new JsCompressor();
    var pathMapperProcessor = new PathMapper();
    var addCopyright = new AddCopyright();

    var amdWrapper = new AmdWrapper({
        files: ['src/**/*.js']
    });

    var amdBabel = new BabelProcessor({
        files: ['src/**/*.js'],
        compileOptions: {
            compact: false,
            ast: false,
            presets: [
                'react'
            ],
            plugins: [
                'external-helpers-2',
                'transform-object-rest-spread',
                'transform-es3-member-expression-literals',
                'transform-es3-property-literals',
                'check-es2015-constants',
                'transform-es2015-arrow-functions',
                'transform-es2015-block-scoped-functions',
                'transform-es2015-block-scoping',
                'transform-es2015-classes',
                'transform-es2015-computed-properties',
                'transform-es2015-destructuring',
                'transform-es2015-for-of',
                'transform-es2015-function-name',
                'transform-es2015-literals',
                'transform-es2015-modules-commonjs',
                'transform-es2015-object-super',
                'transform-es2015-parameters',
                'transform-es2015-shorthand-properties',
                'transform-es2015-spread',
                'transform-es2015-sticky-regex',
                'transform-es2015-template-literals',
                'transform-es2015-unicode-regex',
                'transform-regenerator',
                'transform-object-assign'
            ]
        }
    });

    var cmdBabel = new BabelProcessor({
        files: ['src/**/*.js'],
        compileOptions: {
            compact: false,
            ast: false,
            presets: [
                'react'
            ],
            plugins: [
                'external-helpers-2',
                'transform-object-rest-spread',
                'transform-es3-member-expression-literals',
                'transform-es3-property-literals',
                'check-es2015-constants',
                'transform-es2015-arrow-functions',
                'transform-es2015-block-scoped-functions',
                'transform-es2015-block-scoping',
                'transform-es2015-classes',
                'transform-es2015-computed-properties',
                'transform-es2015-destructuring',
                'transform-es2015-for-of',
                'transform-es2015-function-name',
                'transform-es2015-literals',
                'transform-es2015-modules-commonjs',
                'transform-es2015-object-super',
                'transform-es2015-parameters',
                'transform-es2015-shorthand-properties',
                'transform-es2015-spread',
                'transform-es2015-sticky-regex',
                'transform-es2015-template-literals',
                'transform-es2015-unicode-regex',
                'transform-regenerator',
                'transform-object-assign'
            ]
        }
    });


    return {
        amd: [
            amdBabel,
            amdWrapper,
            moduleProcessor,
            pathMapperProcessor
        ],
        commonjs: [
            cmdBabel,
            pathMapperProcessor
        ],
        release: [
            lessProcessor, cssProcessor, moduleProcessor,
            jsProcessor, pathMapperProcessor, addCopyright
        ]
    };
};

exports.exclude = [
    '*.log',
    '*.md',
    'dist',
    'README',
    '.*',
    'bower.json',
    'dep',
    'example',
    'tool',
    'doc',
    'test',
    'module.conf',
    'node_modules',
    'dep/packages.manifest',
    'dep/*/*/test',
    'dep/*/*/doc',
    'dep/*/*/demo',
    'dep/*/*/tool',
    'dep/*/*/*.md',
    'dep/*/*/package.json',
    'edp-*',
    '.edpproj',
    '.svn',
    '.git',
    '.gitignore',
    '.idea',
    '.project',
    'Desktop.ini',
    'Thumbs.db',
    '.DS_Store',
    '*.tmp',
    '*.bak',
    '*.swp'
];

/* eslint-disable guard-for-in */
exports.injectProcessor = function (processors) {
    for (var key in processors) {
        global[key] = processors[key];
    }
    global.BabelProcessor = require('./tool/BabelProcessor.js');
    global.AmdWrapper = require('./tool/AmdWrapper.js');
};
