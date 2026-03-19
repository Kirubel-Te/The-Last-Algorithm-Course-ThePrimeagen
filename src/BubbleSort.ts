export default function BubbleSort(arr:number[]) : void{
    for(let i: number = 0; i < arr.length; ++i) {
        for(let j: number = 0; j < arr.length -1 - i; ++j) {
            const current = arr[j]!;
            const next = arr[j + 1]!;

            if(current > next){
                arr[j] = next;
                arr[j + 1] = current;
            }
        }
    }
}