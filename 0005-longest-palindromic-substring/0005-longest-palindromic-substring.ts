function expand(left: number, right: number, s: string): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }

    return s.substring(left + 1, right)
}

function longestPalindrome(s: string): string {
    let palindrome = ''
    let max = 0
    
    for(let i = 0; i < s.length; i++) {
        const double = expand(i, i + 1, s)
        const triple = expand(i, i + 2, s)

        const maxPalindrome = double.length > triple.length ? double : triple
        
        if(max < maxPalindrome.length) {
            max = maxPalindrome.length
            palindrome = maxPalindrome
        }

    }

    return s.length < 2 ? s : palindrome
};