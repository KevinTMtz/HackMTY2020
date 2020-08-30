import React, { useState } from 'react';
import styled from '@emotion/styled';
import { SeatsSketchParams } from '../algorithms/seatPacking';
import SeatLayoutInputs from '../components/SeatLayoutInputs';

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
    widthSeats: 20,
    heightSeats: 10,
    capacity: 50,
  });

  return (
    <div>
      <StyledH1>SeatLayout</StyledH1>
      <Wrapper>
        <SeatLayoutInputs
          sketchParams={sketchParams}
          setSketchParams={setSketchParams}
        />
      </Wrapper>
    </div>
  );
};

export default SeatLayout;
