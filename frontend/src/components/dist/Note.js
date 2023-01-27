"use strict";
exports.__esModule = true;
var Note_module_css_1 = require("../styles/Note.module.css");
var react_bootstrap_1 = require("react-bootstrap");
var formatDate_1 = require("../utils/formatDate");
var md_1 = require("react-icons/md");
var utils_module_css_1 = require("../styles/utils.module.css");
function Note(_a) {
    var note = _a.note, className = _a.className, onNoteClicked = _a.onNoteClicked, onDeleteNoteClicked = _a.onDeleteNoteClicked;
    var title = note.title, text = note.text, createdAt = note.createdAt, updatedAt = note.updatedAt;
    var createUpdatedText;
    if (updatedAt > createdAt) {
        createUpdatedText = "Updated: " + formatDate_1.formatDate(updatedAt);
    }
    else {
        createUpdatedText = "Created at: " + formatDate_1.formatDate(createdAt);
    }
    return (React.createElement(react_bootstrap_1.Card, { className: Note_module_css_1["default"].noteCard + " " + className, onClick: function () { return onNoteClicked(note); } },
        React.createElement(react_bootstrap_1.Card.Body, { className: Note_module_css_1["default"].cardBody },
            React.createElement(react_bootstrap_1.Card.Title, { className: utils_module_css_1["default"].flexCenter },
                title,
                React.createElement(md_1.MdDelete, { className: "text-muted ms-auto", onClick: function (e) {
                        onDeleteNoteClicked(note);
                        e.stopPropagation();
                    } })),
            React.createElement(react_bootstrap_1.Card.Text, { className: Note_module_css_1["default"].cardText }, text)),
        React.createElement(react_bootstrap_1.Card.Footer, { className: "text-muted" }, createUpdatedText)));
}
exports["default"] = Note;
