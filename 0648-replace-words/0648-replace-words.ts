function replaceWords(dictionary: string[], sentence: string): string {
    const sentenceArr = sentence.split(' ')

    for(let i = 0; i < sentenceArr.length; i++) {

        for(let char of dictionary) {
            const sliceStr  = sentenceArr[i].slice(0, char.length)
            if(sliceStr === char) {
                sentenceArr[i] = sliceStr
            }
        }
    }

    return sentenceArr.join(' ')
};
