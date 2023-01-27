"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var TextInputField = function (_a) {
    var name = _a.name, label = _a.label, register = _a.register, registerOptions = _a.registerOptions, error = _a.error, props = __rest(_a, ["name", "label", "register", "registerOptions", "error"]);
    return (React.createElement(react_bootstrap_1.Form.Group, { className: "mb-3", controlId: name + "-input" },
        React.createElement(react_bootstrap_1.Form.Label, null, label),
        React.createElement(react_bootstrap_1.Form.Control, __assign({}, props, register(name, registerOptions), { isInvalid: !!error })),
        React.createElement(react_bootstrap_1.Form.Control.Feedback, null, error === null || error === void 0 ? void 0 : error.message)));
};
exports["default"] = TextInputField;
