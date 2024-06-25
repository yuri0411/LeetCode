function twoSum(nums: number[], target: number): number[] {
    const map = new Map(nums.map((num, index) => [num, index]))
    
    for(let i = 0; i < nums.length; i++) {
        const minus = target - nums[i]
        const getVal = map.get(minus)
        
        if(getVal && map.get(minus) !== i) {
            return [i, getVal]
        }
    }
    return []
};