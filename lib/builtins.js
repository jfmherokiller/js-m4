'use strict';


/**
 *
 * @param {module:M4} m4
 * @constructor
 * @alias module:M4.Builtins
 * @private
 */
function Builtins(m4) {
    this._m4 = m4;
    /**
     * @param name
     * @param def
     */
    this.define = function (name, def) {
        this._m4.defineMacro(name, def);
    };
}

/**
 *
 * @param {module:M4} m4
 * @returns {Builtins}
 */
module.exports = function (m4) {
    return new Builtins(m4);
};
