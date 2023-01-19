"use strict";
exports.__esModule = true;
exports.formatDate = void 0;
function formatDate(dateString) {
    return new Date(dateString).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });
}
exports.formatDate = formatDate;
