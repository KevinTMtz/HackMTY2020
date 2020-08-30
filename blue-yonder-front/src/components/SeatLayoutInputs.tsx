import React from 'react';
import { SeatsSketchParams } from '../algorithms/seatPacking';
import StyledNumberInput from '../components/StyledNumberInput';

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
    <form>
      <StyledNumberInput
        title="Asientos a lo ancho"
        unit="asientos"
        value={sketchParams.widthSeats}
        onChange={handleChange('widthSeats')}
      />
      <br />
      <StyledNumberInput
        title="Asientos a lo largo"
        unit="asientos"
        value={sketchParams.heightSeats}
        onChange={handleChange('heightSeats')}
      />
      <br />
      <StyledNumberInput
        title="Tamaño de un asiento"
        unit="m"
        value={sketchParams.seatSize}
        onChange={handleChange('seatSize')}
      />
      <br />
      <StyledNumberInput
        title="Sana distancia"
        unit="m"
        value={sketchParams.distanceBetween}
        onChange={handleChange('distanceBetween')}
      />
    </form>
  );
};

export default SeatLayoutInputs;
