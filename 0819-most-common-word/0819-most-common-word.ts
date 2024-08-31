function mostCommonWord(paragraph: string, banned: string[]): string {
    const  words = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ').split(' ').filter((word)  => !banned.includes(word) && Boolean(word));
    const paragraphMap:{[key in string]: number} = {}

    for (let word of words) {
        if(paragraphMap[word]) {
            paragraphMap[word]++
        } else {
            paragraphMap[word] = 1
        }
    }
    const max = Math.max(...Object.values(paragraphMap))

    return Object.keys(paragraphMap).find((key) =>  paragraphMap[key] === max)
};
