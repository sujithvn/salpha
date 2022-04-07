// Function to get the count of alive neighbors
export const getAliveNeighbors = (row: number, col: number, data: number[][] ) => {
  let aliveNeighbors = 0;
  for (let i = row - 1; i <= row + 1; i++) { // start from previous row till the next row
    for (let j = col - 1; j <= col + 1; j++) { // start from previous col till the next col
      if (i >= 0 && i < data.length && j >= 0 && j < data[i].length) { // skip if we're on the edges of the array
        if (i !== row || j !== col) { // skip if we're dealing with the current cell
          aliveNeighbors += data[i][j]; // cell with value 1 gets added to the aliveNeighbors
        }
      }
    }
  }
  return aliveNeighbors;
}