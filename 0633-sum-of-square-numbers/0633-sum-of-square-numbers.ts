function judgeSquareSum(c: number): boolean {
    let a = 0
    let b = Math.floor(Math.sqrt(c))


    while(a <= b){
        let sum =  Math.pow(a, 2) + Math.pow(b, 2)
        if(sum === c) {
            return true
        }
        if(sum > c) {
            b--
        } else if(sum < c){
            a++
        }
    }
    return false
};