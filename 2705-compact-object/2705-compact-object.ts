type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    const isArray = Array.isArray(obj)
    const map = new Map<string | number, JSONValue>(isArray ? obj.map((item, index) => [index, item]): Object.entries(obj))

    map.forEach((value, key, map) => {
        if(!Boolean(value)) {
            map.delete(key)
        } else {
            if(Array.isArray(value) || typeof value === "object") {
                map.set(key, compactObject(value))
            }
        }
    })

    return isArray ? Array.from(map.values()):  Object.fromEntries(map.entries())
};

