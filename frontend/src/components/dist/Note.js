"use strict";
exports.__esModule = true;
var Note_module_css_1 = require("../styles/Note.module.css");
var react_bootstrap_1 = require("react-bootstrap");
var formatDate_1 = require("../utils/formatDate");
function Note(_a) {
    var note = _a.note, className = _a.className;
    var title = note.title, text = note.text, createdAt = note.createdAt, updatedAt = note.updatedAt;
    var createUpdatedText;
    if (updatedAt > createdAt) {
        createUpdatedText = "Updated: " + formatDate_1.formatDate(updatedAt);
    }
    else {
        createUpdatedText = "Created at: " + formatDate_1.formatDate(createdAt);
    }
    return (React.createElement(react_bootstrap_1.Card, { className: Note_module_css_1["default"].noteCard + " " + className },
        React.createElement(react_bootstrap_1.Card.Body, { className: Note_module_css_1["default"].cardBody },
            React.createElement(react_bootstrap_1.Card.Title, null, title),
            React.createElement(react_bootstrap_1.Card.Text, { className: Note_module_css_1["default"].cardText }, text)),
        React.createElement(react_bootstrap_1.Card.Footer, { className: "text-muted" }, createUpdatedText)));
}
exports["default"] = Note;
