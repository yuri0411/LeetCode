interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    let result = {}

    for(let element of this) {
        const id = fn(element)
        if(result[id]) {
            result[id].push(element)
        } else {
            result[id] = [element]
        }
    }

    return result
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */