function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const map = new Map(arr2.map((num, index) => [num, index]))
    
    arr1.sort((a, b) => {
        const orderA = map.has(a) ? map.get(a) : 999 + a;
        const orderB = map.has(b) ? map.get(b) : 999 + b;

        return orderA - orderB;
    })
    
    return arr1
};