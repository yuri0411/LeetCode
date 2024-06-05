function commonChars(words: string[]): string[] {
    let minWord = {}
    for(let i = 0; i < words[0].length; i++) {
        if(minWord[words[0][i]]) {
            minWord[words[0][i]]++
        } else {
            minWord[words[0][i]] = 1
        }
    }
    
    for(let j = 1; j < words.length; j++) {
        let wordFreq = {}
        for(let char of words[j]) {
            if(wordFreq[char]) {
                wordFreq[char]++
            } else {
                wordFreq[char] = 1
            }
        }
        
        for(let char in minWord) {
            if(wordFreq[char]) {
                minWord[char] = Math.min(minWord[char], wordFreq[char])
            } else {
                minWord[char] = 0
            }
        }
    }
    
    let result = []
    for(let key in minWord) {
       for(let i = 0; i < minWord[key]; i++) {
           result.push(key)
       }
    }
    return result
};