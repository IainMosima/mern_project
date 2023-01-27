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
exports.__esModule = true;
var react_hook_form_1 = require("react-hook-form");
var NotesApi = require("../network/note_api");
var react_bootstrap_1 = require("react-bootstrap");
var TextInputField_1 = require("./form/TextInputField");
var utils_module_css_1 = require("../styles/utils.module.css");
var SignUpModal = function (_a) {
    var onDismiss = _a.onDismiss, onSignUpSuccessfull = _a.onSignUpSuccessfull;
    var _b = react_hook_form_1.useForm(), register = _b.register, handleSubmit = _b.handleSubmit, _c = _b.formState, errors = _c.errors, isSubmitting = _c.isSubmitting;
    function onSubmit(credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, NotesApi.signUp(credentials)];
                    case 1:
                        newUser = _a.sent();
                        onSignUpSuccessfull(newUser);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        alert(error_1);
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement(react_bootstrap_1.Modal, { show: true, onHide: function () { return onDismiss; } },
        React.createElement(react_bootstrap_1.Modal.Header, null,
            React.createElement(react_bootstrap_1.Modal.Title, null, "Sign Up")),
        React.createElement(react_bootstrap_1.Modal.Body, null,
            React.createElement(react_bootstrap_1.Form, { onSubmit: handleSubmit(onSubmit) },
                React.createElement(TextInputField_1["default"], { name: "username", label: "UserName", type: "text", placeHolder: "Username", register: register, registerOptions: { required: "Required" }, error: errors.username }),
                React.createElement(TextInputField_1["default"], { name: "email", label: "Email", type: "email", placeHolder: "Email", register: register, registerOptions: { required: "Required" }, error: errors.email }),
                React.createElement(TextInputField_1["default"], { name: "password", label: "Password", type: "password", placeHolder: "Password", register: register, registerOptions: { required: "Required" }, error: errors.password }),
                React.createElement(react_bootstrap_1.Button, { type: "submit", disabled: isSubmitting, className: utils_module_css_1["default"].width100 }, "Sign Up")))));
};
exports["default"] = SignUpModal;
