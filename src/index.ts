import { linearSearch } from "./LinerSearch";
import binarySearch from "./BinarySearch";
import BinarySearchIndex from "./BinarySearchIndex";

const arr = [1, 2, 3, 4, 5];
console.log(linearSearch(arr, 3));
console.log(linearSearch(arr, 6));
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 6));
console.log(BinarySearchIndex(arr, 4));
console.log(BinarySearchIndex(arr, 6));
    
console.log("Hello World");
console.log("this is the index.ts file...")