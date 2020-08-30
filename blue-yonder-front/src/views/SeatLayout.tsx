import React, { useState } from 'react';
import styled from '@emotion/styled';
import { SeatsSketchParams, calcSeatLayout } from '../algorithms/seatPacking';
import SeatLayoutInputs from '../components/SeatLayoutInputs';
import SeatLayoutSketch from '../components/SeatLayoutSketch';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
`;

const SeatLayout: React.FC = () => {
  const [sketchParams, setSketchParams] = useState<SeatsSketchParams>({
    widthSeats: 22,
    heightSeats: 10,
    capacity: 25,
  });

  return (
    <div>
      <StyledH1>Static Layout</StyledH1>
      <Wrapper>
        <SeatLayoutInputs
          sketchParams={sketchParams}
          setSketchParams={setSketchParams}
        />
        <SeatLayoutSketch
          sketchParams={sketchParams}
          seats={calcSeatLayout(sketchParams)}
        />
      </Wrapper>
    </div>
  );
};

export default SeatLayout;
