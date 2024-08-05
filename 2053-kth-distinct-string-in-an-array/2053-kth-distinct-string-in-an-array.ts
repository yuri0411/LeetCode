function kthDistinct(arr: string[], k: number): string {
    const eleMap:{[key in string]: number} = {}

    for(let ele of arr) {
        if(eleMap[ele]) {
            eleMap[ele]++
        } else {
            eleMap[ele] = 1
        }
    }

    const uniqueChars = Object.keys(eleMap).filter((key) => eleMap[key] === 1)
    return uniqueChars[k - 1] ?? ""
};