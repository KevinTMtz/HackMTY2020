export interface SeatsSketchParams {
  widthSeats: number;
  heightSeats: number;
  capacity: number;
}

export interface Seat {
  x: number;
  y: number;
}

export const calcSeatLayout = (params: SeatsSketchParams): Seat[] => {
  const xMax = Math.floor(params.widthSeats);
  const yMax = Math.floor(params.heightSeats);
  const capacity = Math.min(100, Math.max(0, params.capacity));
  const seatIndexes = Array.from({ length: xMax * yMax }, () => true);
  let lastI = -1;
  for (let i = 0; i < xMax * yMax; i++) {
    const mappedI = Math.floor((i * capacity) / 100);
    if (mappedI === lastI) {
      seatIndexes[i] = false;
    } else {
      lastI = mappedI;
    }
  }
  return generateArr(xMax, yMax).filter((_, i) => seatIndexes[i]);
};

const generateArr = (xMax: number, yMax: number): Seat[] =>
  Array.from({ length: xMax * yMax }, (_, i) => ({
    x: i % xMax,
    y: Math.floor(i / xMax),
  }));
