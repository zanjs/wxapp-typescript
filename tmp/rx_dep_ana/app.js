"use strict";
// fix rxjs
global.global = global;
global.Object = Object;
global.clearTimeout = clearTimeout;
var wechat_weapp_redux_1 = require("wechat-weapp-redux");
var configureStore_1 = require("./redux/configureStore");
var store = configureStore_1.default();
var Application = (function () {
    function Application() {
    }
    Application.prototype.onLaunch = function () {
    };
    return Application;
}());
App(wechat_weapp_redux_1.Provider(store)(new Application()));
