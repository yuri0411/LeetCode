function longestPalindrome(s: string): number {
    let result:{[key: string]: number} = {}
    for(let i=0; i < s.length; i++ ) {
        if(result[s[i]] ===  undefined) {
            result[s[i]] = 1
        }
        else {
            result[s[i]] +=1
        }
    }


    
   const evenSum = Object.values(result).reduce((prev, curr: number) => {
       let sum = prev
       if(curr % 2 === 0) {
           sum += curr
       }
       if(curr % 2 === 1) {
           sum += curr -1
       }

       return sum
   }, 0)

    return  evenSum === s.length ? evenSum : evenSum + 1
};