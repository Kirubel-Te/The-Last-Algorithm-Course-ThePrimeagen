export default function BinarySearchIndex(arr:number[],target:number):number{
    let left = 0
    let right = arr.length
    let mid:number 
    let midValue:number | undefined
    do{
        mid = Math.floor(left + (right - left) / 2)
        midValue = arr[mid]
        if(midValue === undefined){
            return -1
        } 
        if(midValue === target){
            return mid
        }else if(midValue > target){
            right = mid
        }else{
            left = mid + 1
        }
    }while(left < right)
    return -1      
}