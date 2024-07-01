function threeConsecutiveOdds(arr: number[]): boolean {
     let oddCount = 0

    for(let num of arr) {
        if(num % 2 === 1) {
            oddCount++
        }
        if(num % 2 === 0) {
            oddCount = 0
        }
        if(oddCount === 3) return true
    }
    return false
};