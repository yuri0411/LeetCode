function heightChecker(heights: number[]): number {
    const sortedHeights = [...heights].sort((a, b) => a - b)

    let notMatch = 0
    for (let i = 0; i < heights.length; i++) {
        if(sortedHeights[i] !== heights[i]) notMatch++
    }

    return notMatch
};
