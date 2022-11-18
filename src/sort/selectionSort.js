"use strict";
exports.__esModule = true;
exports.selectioSort = void 0;
function selectioSort(array) {
    for (var i = 1; i < array.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        var tmp = array[min];
        array[min] = array[i];
        array[i] = tmp;
    }
    return array;
}
exports.selectioSort = selectioSort;
