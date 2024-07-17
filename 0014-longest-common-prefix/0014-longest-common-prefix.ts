function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0]
    for(let i = 1; i < strs.length; i++) {
        let char = ''
       for(let j = 0; j < strs[i].length; j++) {
           if(prefix[j] === strs[i][j]) {
               char += strs[i][j]
           } else {
            break
           }
       }
       prefix = char
    }

    return prefix
};
