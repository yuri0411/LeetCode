function minMovesToSeat(seats: number[], students: number[]): number {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)

    let minMovesCount = 0

   for(let i = 0; i < students.length; i++){
       minMovesCount += seats[i] > students[i] ? seats[i] - students[i] : students[i] - seats[i]
   }

    return minMovesCount
};
