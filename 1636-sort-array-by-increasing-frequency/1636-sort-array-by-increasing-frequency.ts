function frequencySort(nums: number[]): number[] {
    const map: {[key in string]: number} = {}
    let result:number[][] = []

    for(let num of nums) {
        if(map[num]) {
            map[num]++
        } else {
            map[num] = 1
        }
    }
    
   for(let [key, value] of Object.entries(map) as [string, number][]) {
        result.push(Array.from({length: value}, () => Number(key)))
    }

    return result.sort((a, b) =>
        a.length - b.length ||  b[0] - a[0]
    ).flat()
};