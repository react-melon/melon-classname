/**
 * @file melon-classname
 * @author leon(ludafa@outlook.com)
 */

const toString = Object.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;

function create() {

    const classes = [];

    for (let i = 0, len = arguments.length; i < len; i++) {

        const arg = arguments[i];

        if (!arg) {
            continue;
        }

        switch (toString.call(arg).slice(8, -1)) {

            case 'String':
            case 'Number':
                classes.push(arg);
                break;

            case 'Array':
                classes.push(...create(...arg));
                break;

            case 'Object':
                for (const key in arg) {
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
    return create(...arguments).join(' ');
};
