"use strict";
exports.__esModule = true;
exports.bubbleSort = void 0;
function bubbleSort(array) {
    array = array.slice();
    // creates a copy of the array
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                var swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}
exports.bubbleSort = bubbleSort;
