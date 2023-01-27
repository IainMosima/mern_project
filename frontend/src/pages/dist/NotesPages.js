"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var NotesPageLoggedInView_1 = require("../components/NotesPageLoggedInView");
var NotesPageLoggedOutView_1 = require("../components/NotesPageLoggedOutView");
var NotePage_module_css_1 = require("../styles/NotePage.module.css");
var NotePage = function (_a) {
    var loggedInUser = _a.loggedInUser;
    return (React.createElement(react_bootstrap_1.Container, { className: NotePage_module_css_1["default"].notesPage },
        React.createElement(React.Fragment, null, loggedInUser
            ? React.createElement(NotesPageLoggedInView_1["default"], null)
            : React.createElement(NotesPageLoggedOutView_1["default"], null))));
};
exports["default"] = NotePage;
