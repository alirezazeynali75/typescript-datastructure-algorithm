"use strict";
exports.__esModule = true;
exports.binarySearch = void 0;
function binarySearch(nums, key) {
    var low = 0;
    var high = nums.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (nums[mid] === key) {
            return mid + 1;
        }
        if (key > nums[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}
exports.binarySearch = binarySearch;
