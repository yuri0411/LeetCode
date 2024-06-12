type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    let result = []

    arr.forEach((ele) => {
        if(Array.isArray(ele) && n > 0) {
            result.push(...flat(ele, n - 1))
            return
        }
        result.push(ele)
    })
    return result
};