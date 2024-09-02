function groupAnagrams(strs: string[]): string[][] {
    const wordsMap: {[key in string]: string[]} = {};
    let answer: string[][] = []

    for (let str of strs) {
        const key = str.split("").sort((a, b) => a > b ? 1 : - 1).join('');
        if(wordsMap[key]) {
            wordsMap[key].push(str)
        } else {
            wordsMap[key] = [str]
        }

    }

    for(let word of Object.values(wordsMap)) {
        answer.push(word)
    }

    return answer
};
