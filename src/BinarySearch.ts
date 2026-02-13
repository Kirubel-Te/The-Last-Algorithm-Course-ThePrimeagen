export default function BinarySearch(arr:number[],target:number):boolean{
    let left = 0
    let right = arr.length - 1
    
    do{
        let mid = Math.floor(left + (right - left) / 2)
        const midValue = arr[mid]
        if (midValue === undefined) {
            return false
        }
        if(midValue === target){
            return true
        }
        else if(midValue > target){
            right = mid
        }
        else{
            left = mid + 1
        }
    }while(left <= right)
    return false
}