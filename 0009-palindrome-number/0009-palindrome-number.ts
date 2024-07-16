function isPalindrome(x: number): boolean {
    const stringOfX = String(x)
    const xLength = stringOfX.length
    
    for(let i = 0; i < xLength; i++) {
        if(stringOfX[i] !== stringOfX[xLength - i -1]) {
            return false
        }
    }    
    return true
};
