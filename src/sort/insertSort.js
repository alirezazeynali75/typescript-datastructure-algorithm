"use strict";
exports.__esModule = true;
exports.insertionSort = void 0;
function insertionSort(array) {
    IndexIterator: for (var i = 1; i < array.length; i++) {
        var key = array[i];
        InsertionKey: for (var j = i - 1; j >= 0; j--) {
            if (key >= array[j]) {
                array[j + 1] = key;
                continue IndexIterator;
            }
            else {
                array[j + 1] = array[j];
                array[j] = key;
                continue InsertionKey;
            }
        }
    }
    return array;
}
exports.insertionSort = insertionSort;
