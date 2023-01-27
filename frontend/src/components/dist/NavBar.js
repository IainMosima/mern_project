"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var NavbarLoggedInView_1 = require("./NavbarLoggedInView");
var NavbarLoggedOutView_1 = require("./NavbarLoggedOutView");
var react_router_dom_1 = require("react-router-dom");
var NavBar = function (_a) {
    var loggedInUser = _a.loggedInUser, onSignUpClicked = _a.onSignUpClicked, onLoginClicked = _a.onLoginClicked, onLogoutSuccessful = _a.onLogoutSuccessful;
    return (React.createElement(react_bootstrap_1.Navbar, { bg: "primary", variant: "dark", expand: "lg", sticky: "top" },
        React.createElement(react_bootstrap_1.Container, null,
            React.createElement(react_bootstrap_1.Navbar.Brand, { as: react_router_dom_1.Link, to: "/" }, "Notes App"),
            React.createElement(react_bootstrap_1.Navbar.Toggle, { "arial-controls": "main-navbar" }),
            React.createElement(react_bootstrap_1.Navbar.Collapse, { id: "main-navbar" },
                React.createElement(react_bootstrap_1.Nav, null,
                    React.createElement(react_bootstrap_1.Nav.Link, { as: react_router_dom_1.Link, to: "/privacy" }, "Privacy")),
                React.createElement(react_bootstrap_1.Nav, { className: "ms-auto" }, loggedInUser
                    ? React.createElement(NavbarLoggedInView_1["default"], { user: loggedInUser, onLogoutSuccessful: onLogoutSuccessful })
                    : React.createElement(NavbarLoggedOutView_1["default"], { onLoginClicked: onLoginClicked, onSignUpClicked: onSignUpClicked }))))));
};
exports["default"] = NavBar;
