function singleNumber(nums: number[]): number[] {
    const [first, ...otherNums] = nums
    const singleNums = [first]

    otherNums.forEach((num) => {
        const duplicateIndex = singleNums.findIndex((singleNum) => singleNum === num)
        if(duplicateIndex !== -1) {
            singleNums.splice(duplicateIndex, 1)
        } else {
            singleNums.push(num)
        }
    })
    return singleNums
};