export function mySqrt(x: number): number {
    if (x < 2) return x;

    let left = 2;
    let right = Math.floor(x / 2);

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let num = mid * mid;

        if (num === x) return mid;
        if (num > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right;
};
