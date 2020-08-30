import React, { useState } from 'react';
import { SeatsSketchParams } from '../algorithms/seatPacking';
import SeatLayoutInputs from '../components/SeatLayoutInputs';

const SeatLayout: React.FC = () => {
  const [sketchParams, setSketchParams] = useState<SeatsSketchParams>({
    widthSeats: 20,
    heightSeats: 10,
    seatSize: 1,
    distanceBetween: 1.5,
  });

  return (
    <div>
      <h1>SeatLayout</h1>
      <SeatLayoutInputs
        sketchParams={sketchParams}
        setSketchParams={setSketchParams}
      />
    </div>
  );
};

export default SeatLayout;
