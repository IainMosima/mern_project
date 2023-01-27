"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var AddEditNoteDialog_1 = require("../components/AddEditNoteDialog");
var NotesApi = require("../network/note_api");
var Note_1 = require("../components/Note");
var NotePage_module_css_1 = require("../styles/NotePage.module.css");
var utils_module_css_1 = require("../styles/utils.module.css");
var fa_1 = require("react-icons/fa");
var NotesPageLoggedInView = function () {
    var _a = react_1.useState([]), notes = _a[0], setNotes = _a[1];
    var _b = react_1.useState(true), notesLoading = _b[0], setNotesLoading = _b[1];
    var _c = react_1.useState(false), showNotesLoadingError = _c[0], setshowNotesLoadingError = _c[1];
    var _d = react_1.useState(false), showAddNoteDialog = _d[0], setShowAddNoteDialog = _d[1];
    var _e = react_1.useState(), noteToEdit = _e[0], setNoteToEdit = _e[1];
    react_1.useEffect(function () {
        function loadNotes() {
            return __awaiter(this, void 0, void 0, function () {
                var notes_1, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, 3, 4]);
                            setshowNotesLoadingError(false);
                            setNotesLoading(true);
                            return [4 /*yield*/, NotesApi.fetchNotes()];
                        case 1:
                            notes_1 = _a.sent();
                            setNotes(notes_1);
                            return [3 /*break*/, 4];
                        case 2:
                            error_1 = _a.sent();
                            console.error(error_1);
                            alert(error_1);
                            setshowNotesLoadingError(true);
                            return [3 /*break*/, 4];
                        case 3:
                            setNotesLoading(false);
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        loadNotes();
    }, []);
    function deleteNote(note) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, NotesApi.deleteNote(note._id)];
                    case 1:
                        _a.sent();
                        setNotes(notes.filter(function (existingNote) { return existingNote._id !== note._id; }));
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        alert(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    var noteGrid = React.createElement(react_bootstrap_1.Row, { xs: 1, md: 2, xl: 3, className: "g-4 " + NotePage_module_css_1["default"].notesGrid }, notes.map(function (note) { return (React.createElement(react_bootstrap_1.Col, { key: note._id },
        React.createElement(Note_1["default"], { note: note, className: NotePage_module_css_1["default"].note, onNoteClicked: setNoteToEdit, onDeleteNoteClicked: deleteNote }))); }));
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Button, { className: "mb-4 " + utils_module_css_1["default"].blockCenter + " " + utils_module_css_1["default"].flexCenter, onClick: function () { return setShowAddNoteDialog(true); } },
            React.createElement(fa_1.FaPlus, null),
            "Add new note"),
        notesLoading && React.createElement(react_bootstrap_1.Spinner, { animation: "border", variant: "primary" }),
        showNotesLoadingError && React.createElement("p", null, "Something went wrong. Please refresh the page."),
        !notesLoading && !showNotesLoadingError &&
            React.createElement(React.Fragment, null, notes.length > 0
                ? noteGrid
                : React.createElement("p", null, "You don't have any notes yet")),
        showAddNoteDialog &&
            React.createElement(AddEditNoteDialog_1["default"], { onDismiss: function () { return setShowAddNoteDialog(false); }, onNoteSaved: function (newNote) {
                    setNotes(__spreadArrays(notes, [newNote]));
                    setShowAddNoteDialog(false);
                } }),
        noteToEdit &&
            React.createElement(AddEditNoteDialog_1["default"], { noteToEdit: noteToEdit, onDismiss: function () { return setNoteToEdit(null); }, onNoteSaved: function (updatedNote) {
                    setNotes(notes.map(function (existingNote) { return existingNote._id === updatedNote._id ? updatedNote : existingNote; }));
                    setNoteToEdit(null);
                } })));
};
exports["default"] = NotesPageLoggedInView;
