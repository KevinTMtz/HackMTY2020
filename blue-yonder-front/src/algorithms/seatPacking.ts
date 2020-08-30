export interface SeatsSketchParams {
  widthSeats: number;
  heightSeats: number;
  seatSize: number;
  distanceBetween: number;
}

export interface Seat {
  x: number;
  y: number;
}

export const calcSeatLayout = (params: SeatsSketchParams): Seat[] => {
  return [];
};
