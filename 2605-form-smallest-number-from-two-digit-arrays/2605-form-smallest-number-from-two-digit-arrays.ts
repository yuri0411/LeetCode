function minNumber(nums1: number[], nums2: number[]): number {
    const minSet = new Set()

    for(let num of nums1.concat(nums2).sort((a, b)=> a - b)) {
        if(minSet.has(num)) return num
        minSet.add(num)
    }

    const min1 = Math.min(...nums1)
    const min2 = Math.min(...nums2)

    return min1 < min2 ? Number(`${min1}${min2}`) : Number(`${min2}${min1}`)
};
