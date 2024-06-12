/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low = 0
    let mid = 0
    let high = nums.length - 1
    while (mid <= high) {
        if(nums[mid] === 0) {
            let item = nums[mid]
            nums[mid]=  nums[low]
            nums[low]  = item
            low++
            mid++
        } else if(nums[mid] === 1) {
            mid++
        } else if(nums[mid] === 2) {
            let item = nums[high]
            nums[high] = nums[mid]
            nums[mid] = item
            high--
        }
    }
};