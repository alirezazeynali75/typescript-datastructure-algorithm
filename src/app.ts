//import { convertCompilerOptionsFromJson, isConstructorDeclaration } from "typescript";

//convertCompilerOptionsFromJson;

import { binarySearch } from "./search/binary";
import { linearSearch } from "./search/linearSearch";


const result = binarySearch ([1,3,6,8,9,11,14,15],6)
const linearSearchResult = linearSearch ([1,10,3,4,7,12,5,8], 9)

console.log(result)
console.log(linearSearchResult)
