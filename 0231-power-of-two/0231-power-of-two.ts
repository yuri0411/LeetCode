function isPowerOfTwo(n: number): boolean {
    if(n < 0) return false
    while (n > 1) {
        n /= 2
    }
    return Boolean(Math.trunc(n))
};