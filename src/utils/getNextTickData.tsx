// Function to generate  the next tick data based on multiple conditions as below
// ● Any live cell with fewer than two live neighbours dies (underpopulation).
// ● Any live cell with two or three live neighbours lives on to the next generation.
// ● Any live cell with more than three live neighbours dies (overcrowding).
// ● Any dead cell with exactly three live neighbours becomes a live cell (reproduction).

import { getAliveNeighbors } from './getAliveNeighbors';

export const getNextTickData = (prevData: number[][]) => {
  let nextTickData = [];
  for (let i = 0; i < prevData.length; i++) {
    let row = [];
    for (let j = 0; j < prevData[i].length; j++) {
      let aliveNeighbors = getAliveNeighbors(i, j, prevData); // get the count of alive neighbors
      let isAlive = prevData[i][j] === 1;   // Alive = 1, Dead = 0
      if (isAlive) {
        if (aliveNeighbors === 2 || aliveNeighbors === 3) { // Alive cell with 2 or 3 alive neighbors stays alive
          row.push(1);
        } else {
          row.push(0); // Alive cell with less than 2 or more than 3 alive neighbors dies
        }
      } else {
        if (aliveNeighbors === 3) { // Dead cell with exactly 3 alive neighbors becomes alive
          row.push(1); 
        } else {
          row.push(0); // Dead cell with Alive neighbours !== 3 stays dead
        }
      }
    }
    nextTickData.push(row);
  }
  return nextTickData;
}