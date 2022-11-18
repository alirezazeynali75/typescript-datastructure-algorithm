"use strict";
//import { convertCompilerOptionsFromJson, isConstructorDeclaration } from "typescript";
exports.__esModule = true;
//convertCompilerOptionsFromJson;
var binary_1 = require("./search/binary");
var linearSearch_1 = require("./search/linearSearch");
var bubbleSort_1 = require("./sort/bubbleSort");
var insertSort_1 = require("./sort/insertSort");
var selectionSort_1 = require("./sort/selectionSort");
var result = (0, binary_1.binarySearch)([1, 3, 6, 8, 9, 11, 14, 15], 6);
var linearSearchResult = (0, linearSearch_1.linearSearch)([1, 10, 3, 4, 7, 12, 5, 8], 9);
var bubbleSortResult = (0, bubbleSort_1.bubbleSort)([7, 1, 9, 8, 20, 3, 4]);
var insertionSortResult = (0, insertSort_1.insertionSort)([7, 1, 9, 8, 20, 3, 4]);
var selectioSortResult = (0, selectionSort_1.selectioSort)([9, 1, 2, 3, 0, 10, 1]);
console.log(result);
console.log(linearSearchResult);
console.log(insertionSortResult);
console.log(selectioSortResult);
