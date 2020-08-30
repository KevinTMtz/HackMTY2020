export interface SeatsSketchParams {
  widthSeats: number;
  heightSeats: number;
  capacity: number;
}

export interface Seat {
  x: number;
  y: number;
}

export interface SeatDistribution {
  seats: Seat[];
  minDistance: number;
}

export const calcSeatLayout = (params: SeatsSketchParams): SeatDistribution => {
  const xMax = Math.floor(params.widthSeats);
  const yMax = Math.floor(params.heightSeats);
  const percentage = Math.min(100, Math.min(0, params.capacity));

  return {
    seats: [],
    minDistance: 0,
  };
};
