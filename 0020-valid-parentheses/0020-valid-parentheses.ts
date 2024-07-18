function isValid(s: string): boolean {
    if(s.length % 2 !== 0) return false
    let stack = []
    const pair = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i])
        } else if(stack[stack.length - 1] === pair[s[i]]) {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length === 0

};