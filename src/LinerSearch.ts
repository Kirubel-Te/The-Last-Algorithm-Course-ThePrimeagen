export function linearSearch(arr: number[], target: number): boolean {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}
