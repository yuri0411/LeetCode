function reorderLogFiles(logs: string[]): string[] {
    let letters = []
    let digits = []
    for (let log of logs) {
        const splitLog = log.split(' ')
        if(isNaN(Number(splitLog[1]))) {
            letters.push(log)
        } else {
            digits.push(log)
        }
    }
    
    letters.sort((a, b) => {
        const [aFirst, ...aRest] = a.split(' ')
        const [bFirst, ...bRest] = b.split(' ')

        return aRest.join(' ').localeCompare(bRest.join(' ')) === 0 ? aFirst.localeCompare(bFirst) : aRest.join(' ').localeCompare(bRest.join(' '))
    })

    return [...letters, ...digits]
};
