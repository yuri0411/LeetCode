function lengthOfLongestSubstring(s) {
    const charSet = new Set()
    let left = 0
    let right = 0
    let maxLength = 0

    while(left < s.length && right < s.length) {
        if(!charSet.has(s[right])) {
            charSet.add(s[right++])

            maxLength = Math.max(maxLength, right - left)
        } else {
            charSet.delete(s[left++])
        }
    }

    return maxLength
}
