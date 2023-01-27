"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var NavbarLoggedOutView = function (_a) {
    var onSignUpClicked = _a.onSignUpClicked, onLoginClicked = _a.onLoginClicked;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Button, { onClick: onSignUpClicked }, "Sign Up"),
        React.createElement(react_bootstrap_1.Button, { onClick: onLoginClicked }, "Log In")));
};
exports["default"] = NavbarLoggedOutView;
