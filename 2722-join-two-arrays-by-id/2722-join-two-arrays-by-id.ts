type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const arrMap = new Map<number, any>(arr1.map((ele) => [ele.id, ele]))

    const result = []
    for(let ele of arr2) {
        const existEle = arrMap.get(ele.id)
        
        arrMap.set(ele.id, {...existEle, ...ele})
       
    }
    
    for (let ele of arrMap.values()) {
        result.push(ele)
    }

    return result.sort((a, b) => a.id - b.id)
};
