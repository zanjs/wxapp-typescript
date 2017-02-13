// declare interface Base extends BasePage {
"use strict";
// }
var Base = (function () {
    function Base() {
    }
    Base.prototype.clickVie = function () {
        console.log('click Vie');
    };
    return Base;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Base;
