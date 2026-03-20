import { linearSearch } from "./LinerSearch";
import binarySearch from "./BinarySearch";
import BinarySearchIndex from "./BinarySearchIndex";
import { mySqrt } from "./BinarySqrt";
import twoCrystalBalls from "./Two_crystal_balls";
import BubbleSort from "./BubbleSort";
import LinkedList from "./LinkedList";

// const arr = [1, 2, 3, 4, 5];
// console.log(linearSearch(arr, 3));
// console.log(linearSearch(arr, 6));
// console.log(binarySearch(arr, 4));
// console.log(binarySearch(arr, 6));
// console.log(BinarySearchIndex(arr, 4));
// console.log(BinarySearchIndex(arr, 6));
    
// console.log("Hello World");
// console.log("this is the index.ts file...")
// console.log(mySqrt(4))
// console.log(mySqrt(8))
// console.log(mySqrt(1))
// console.log(mySqrt(0))
// console.log(mySqrt(57))
// console.log(twoCrystalBalls([false, false, false, true, true]))
// console.log(twoCrystalBalls([false, false, false, false, false]))
// console.log(twoCrystalBalls([true, true, true, true, true]))
// console.log(twoCrystalBalls([false, true]))

// let arr : number[] = [5, 2, 9, 1, 5, 6];
// BubbleSort(arr);
// console.log(arr);

const List = new LinkedList<number>();
List.append(10)
List.append(40)
List.append(200)
List.prepend(12)
List.addOnIndex(34,2)
List.delete(40)
List.deleteOnIndex(1)
List.printList()