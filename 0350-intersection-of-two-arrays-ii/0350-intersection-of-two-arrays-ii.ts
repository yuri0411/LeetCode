function intersect(nums1: number[], nums2: number[]): number[] {
     const biggerSet = new Set(nums1.length > nums2.length ? nums1 : nums2)
    const smallerSet = new Set(nums1.length > nums2.length ? nums2 : nums1)

    const intersect = new Set([...biggerSet].filter((ele) => smallerSet.has(ele)))

    let result = []
    for(let ele of intersect) {
        const min = Math.min(nums1.filter((num) => ele === num).length, nums2.filter((num) => ele === num).length)

        result.push(...Array(min).fill(ele))
    }

    return result
};