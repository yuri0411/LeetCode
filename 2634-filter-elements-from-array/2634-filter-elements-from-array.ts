type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let filteredArr = []

    arr.forEach((ele, idx) => {
        const result = fn(ele,idx)
        if(result) {
            filteredArr.push(arr[idx])
        }
    })
    
    return filteredArr
 
};