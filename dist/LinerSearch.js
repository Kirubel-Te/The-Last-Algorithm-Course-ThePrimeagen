"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = linearSearch;
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=LinerSearch.js.map