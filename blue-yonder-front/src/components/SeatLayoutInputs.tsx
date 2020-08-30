import React from 'react';
import styled from '@emotion/styled';
import { SeatsSketchParams } from '../algorithms/seatPacking';
import StyledNumberInput from '../components/StyledNumberInput';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

interface SeatLayoutInputsProps {
  sketchParams: SeatsSketchParams;
  setSketchParams: React.Dispatch<React.SetStateAction<SeatsSketchParams>>;
}

const SeatLayoutInputs: React.FC<SeatLayoutInputsProps> = ({
  sketchParams,
  setSketchParams,
}) => {
  const handleChange = (prop: keyof SeatsSketchParams) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSketchParams({ ...sketchParams, [prop]: +event.target.value });
  };
  return (
    <StyledForm>
      <StyledNumberInput
        title="Asientos a lo ancho"
        unit="asientos"
        value={sketchParams.widthSeats}
        onChange={handleChange('widthSeats')}
      />
      <StyledNumberInput
        title="Asientos a lo largo"
        unit="asientos"
        value={sketchParams.heightSeats}
        onChange={handleChange('heightSeats')}
      />
      <StyledNumberInput
        title="Capacidad"
        unit="%"
        value={sketchParams.capacity}
        onChange={handleChange('capacity')}
      />
    </StyledForm>
  );
};

export default SeatLayoutInputs;
