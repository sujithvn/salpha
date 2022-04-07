import { generateRandomData } from './utils/generateRandomData';
import { getNextTickData } from './utils/getNextTickData';
import { getAliveNeighbors } from './utils/getAliveNeighbors';

describe("Checking Utils-RandomData", () => {
  test("should generate martix of given size", () => {
    const ARRAY_SIZE:number = 10;
    const randArr: number[][] = generateRandomData(ARRAY_SIZE);
    expect(randArr.length).toBe(ARRAY_SIZE);
    expect(randArr[0].length).toBe(ARRAY_SIZE);
    expect(randArr[ARRAY_SIZE - 1].length).toBe(ARRAY_SIZE);
  });
  test("should generate matrix with values either 1 or 0 only", () => {
    const ARRAY_SIZE:number = 10;
    const randArr: number[][] = generateRandomData(ARRAY_SIZE);
    randArr.forEach(row => {
      row.forEach(cell => {
        expect([0,1]).toContain(cell);
      });
    });
  });
});

describe("Checking Utils-NextTickData", () => {
  test("should change content on next tick", () => {
    const ARRAY_SIZE:number = 10;
    const randArr: number[][] = generateRandomData(ARRAY_SIZE);
    const nextTickArr: number[][] = getNextTickData(randArr);
    const nextTickArr2: number[][] = getNextTickData(nextTickArr);
    const nextTickArr3: number[][] = getNextTickData(nextTickArr2);
    expect(nextTickArr).not.toEqual(randArr);
    expect(nextTickArr2).not.toEqual(nextTickArr);
    expect(nextTickArr3).not.toEqual(nextTickArr2);
  });

  test("should cell live or die in next tick", () => {
    const ARRAY_SIZE:number = 10;
    const randArr: number[][] = generateRandomData(ARRAY_SIZE);
    const sampleCellInitial = randArr[5][5];
    const cellAliveInitial = sampleCellInitial === 1;
    const aliveNeighborsInitial = getAliveNeighbors(5, 5, randArr);
    const nextTickArr: number[][] = getNextTickData(randArr);
    const sampleCellNextTick = nextTickArr[5][5];
    const cellAliveNextTick = sampleCellNextTick === 1;

    const cellShouldLive = cellAliveInitial && (aliveNeighborsInitial === 2 || aliveNeighborsInitial === 3);
    const cellShouldDie = cellAliveInitial && aliveNeighborsInitial !== 2 && aliveNeighborsInitial !== 3;
    const cellShouldLiveAgain = !cellAliveInitial && aliveNeighborsInitial === 3;
    const cellShouldDieAgain = !cellAliveInitial && aliveNeighborsInitial !== 3;

    if (cellAliveInitial) {
        expect(cellShouldLive).toBe(cellAliveNextTick);
        expect(cellShouldDie).not.toBe(cellAliveNextTick);
    } else {
      expect(cellShouldLiveAgain).toBe(cellAliveNextTick);
      expect(cellShouldDieAgain).not.toBe(cellAliveNextTick);
    }
  });
});