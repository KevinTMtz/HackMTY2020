import React from 'react';
import { SeatsSketchParams, Seat } from '../algorithms/seatPacking';
import styled from '@emotion/styled';

const StyledSvg = styled.svg`
  margin: 0px 20px;
  max-height: 60vh;
  flex-grow: 1;
`;

interface SeatLayoutInputsProps {
  sketchParams: SeatsSketchParams;
  seats: Seat[];
}

const SeatLayoutSketch: React.FC<SeatLayoutInputsProps> = ({
  sketchParams,
  seats,
}) => {
  const margin = 0.05;
  return (
    <StyledSvg
      viewBox={`0 0 ${sketchParams.widthSeats} ${sketchParams.heightSeats}`}
    >
      <rect
        width={sketchParams.widthSeats}
        height={sketchParams.heightSeats}
        fill="#d1ccc0"
      />
      {Array.from({
        length: sketchParams.widthSeats * sketchParams.heightSeats,
      }).map((_, i) => (
        <rect
          key={i + '-seatNA'}
          x={(i % sketchParams.widthSeats) + margin}
          y={Math.floor(i / sketchParams.widthSeats) + margin}
          width={1 - 2 * margin}
          height={1 - 2 * margin}
          fill="#5d4037"
        />
      ))}
      {seats.map((seat, i) => (
        <rect
          key={i + '-seatA'}
          x={seat.x + margin}
          y={seat.y + margin}
          width={1 - 2 * margin}
          height={1 - 2 * margin}
          fill="#66bb6a"
        />
      ))}
    </StyledSvg>
  );
};

export default SeatLayoutSketch;
