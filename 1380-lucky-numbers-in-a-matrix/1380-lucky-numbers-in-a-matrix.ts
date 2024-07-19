function luckyNumbers (matrix: number[][]): number[] {
    let minNumbers = []
    let rows = []

    for(let i = 0; i < matrix.length; i++) {
        minNumbers.push(Math.min(...matrix[i]))
        for(let j = 0; j < matrix[i].length; j++) {
            if(!rows[j]) rows[j] = []
            rows[j].push(matrix[i][j])
        }
    }

    const isMax = rows.some((row) => Math.max(...row) ===  Math.max(...minNumbers))

    return isMax ? [Math.max(...minNumbers)] : []
};