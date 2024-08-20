function isPalindrome(s: string): boolean {
    const chars = s.match(/[a-zA-Z0-9]/g)?.map((char) => char.toLowerCase()) ?? []

    while (chars.length > 1) {
        if(chars.shift() !== chars.pop()) {
            return false
        }
    }
    return true
};