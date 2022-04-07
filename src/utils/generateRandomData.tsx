// Function to generate the initial Random data
export const generateRandomData = (sz:number): number[][] => {
  return Array.from({ length: sz }).map(() =>
    Array.from({ length: sz }).map(() => Math.round(Math.random()))
  );
}