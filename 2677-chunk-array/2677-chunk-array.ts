type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let result = []
    const count = arr.length / size
    
    for(let i = 0; i < count; i++) {
        result.push(arr.splice(0, size))
    }
    return result

};