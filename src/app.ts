//import { convertCompilerOptionsFromJson, isConstructorDeclaration } from "typescript";

//convertCompilerOptionsFromJson;

import { binarySearch } from "./search/binary";
import { linearSearch } from "./search/linearSearch";
import { bubbleSort } from "./sort/bubbleSort";
import { insertionSort } from "./sort/insertSort";
import { selectioSort } from "./sort/selectionSort";

const result = binarySearch ([1,3,6,8,9,11,14,15],6)
const linearSearchResult = linearSearch ([1,10,3,4,7,12,5,8], 9)
const bubbleSortResult = bubbleSort([7,1,9,8,20,3,4])
const insertionSortResult = insertionSort([7,1,9,8,20,3,4])
const selectioSortResult = selectioSort([9,1,2,3,0,10,1])

console.log(result)
console.log(linearSearchResult)
console.log(insertionSortResult)
console.log(selectioSortResult)
