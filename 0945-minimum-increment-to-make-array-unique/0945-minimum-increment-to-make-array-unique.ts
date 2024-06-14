function minIncrementForUnique(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let minCount = 0
    let uniqueNum = nums[0]

    for(let i = 1; i < nums.length; i++) {
        uniqueNum++
        if(uniqueNum <= nums[i]) {
            uniqueNum = nums[i]
        } else {
            minCount += uniqueNum - nums[i]
        }
    }

    return minCount
};