function isPalindrome(s: string): boolean {
    const chars = s.match(/[a-zA-Z0-9]/g)?.map((char) => char.toLowerCase())
    
    if(!Boolean(chars)) return true
    return chars.join('') === chars.reverse().join('')
};