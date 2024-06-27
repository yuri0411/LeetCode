function findCenter(edges: number[][]): number {
    const map:{[key: number]: number} = {}
    let result = 0

    for(let edge of edges.flat()) {
        if(map[edge]) {
            map[edge]++
        } else {
            map[edge] = 1
        }
    }

    let max = 0
    for(let num of Object.entries(map)) {
        if(max < num[1]) {
            max = num[1]
            result = Number(num[0])
        }
    }

    return result
};