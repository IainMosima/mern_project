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
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var LoginModal_1 = require("./components/LoginModal");
var NavBar_1 = require("./components/NavBar");
var SignUpModal_1 = require("./components/SignUpModal");
var NotesApi = require("./network/note_api");
var react_bootstrap_1 = require("react-bootstrap");
var NotesPages_1 = require("./pages/NotesPages");
var PrivacyPage_1 = require("./pages/PrivacyPage");
var NotFoundPage_1 = require("./pages/NotFoundPage");
var App_module_css_1 = require("./styles/App.module.css");
function App() {
    var _a = react_1.useState(null), loggedInUser = _a[0], setloggedInUser = _a[1];
    var _b = react_1.useState(false), showLogInModal = _b[0], setshowLogInModal = _b[1];
    var _c = react_1.useState(false), showSignUpModal = _c[0], setshowSignUpModal = _c[1];
    react_1.useEffect(function () {
        function fetchLoggedInUser() {
            return __awaiter(this, void 0, void 0, function () {
                var user, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, NotesApi.getLoggedInUser()];
                        case 1:
                            user = _a.sent();
                            setloggedInUser(user);
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        fetchLoggedInUser();
    }, []);
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", null,
            React.createElement(NavBar_1["default"], { loggedInUser: loggedInUser, onSignUpClicked: function () { return setshowSignUpModal(true); }, onLoginClicked: function () { return setshowLogInModal(true); }, onLogoutSuccessful: function () { return setloggedInUser(null); } }),
            React.createElement(react_bootstrap_1.Container, { className: App_module_css_1["default"].pageContainer },
                React.createElement(react_router_dom_1.Routes, null,
                    React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(NotesPages_1["default"], { loggedInUser: loggedInUser }) }),
                    React.createElement(react_router_dom_1.Route, { path: '/privacy', element: React.createElement(PrivacyPage_1["default"], null) }),
                    React.createElement(react_router_dom_1.Route, { path: '/*', element: React.createElement(NotFoundPage_1["default"], null) }))),
            showSignUpModal &&
                React.createElement(SignUpModal_1["default"], { onDismiss: function () { return setshowSignUpModal(false); }, onSignUpSuccessfull: function (user) {
                        setloggedInUser(user);
                        setshowSignUpModal(false);
                    } }),
            showLogInModal &&
                React.createElement(LoginModal_1["default"], { onDismiss: function () { return setshowLogInModal(false); }, onLoginSuccessful: function (user) {
                        setloggedInUser(user);
                        setshowLogInModal(false);
                    } }))));
}
exports["default"] = App;
