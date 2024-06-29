function firstUniqChar(s: string): number {
    const map:{[key: string]: {count: number, index: number}} = {}

    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            map[s[i]].count++
        } else {
            map[s[i]] = {count: 1, index: i}
        }
    }

    for (let m of Object.entries(map)) {
        if(m[1].count === 1){
            return m[1].index
        }
    }
    return -1
};