function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const map = new Map(arr2.map((num, index) => [num, index]))
    arr1.sort((a, b) => a - b)
    
    map.forEach((value, key, map) =>  {
        arr1.sort((a, b) => {
            const orderA = map.get(a) !== undefined ? map.get(a) : Infinity;
            const orderB = map.get(b) !== undefined ? map.get(b) : Infinity;
            
            return orderA - orderB;
        })
    })
    return arr1
};