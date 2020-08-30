import React from 'react';
import { RectanglesSketchParams } from '../algorithms/rectPacking';
import StyledNumberInput from '../components/StyledNumberInput';

interface RectLayoutInputsProps {
  sketchParams: RectanglesSketchParams;
  setSketchParams: React.Dispatch<React.SetStateAction<RectanglesSketchParams>>;
}

const RectLayoutInputs: React.FC<RectLayoutInputsProps> = ({
  sketchParams,
  setSketchParams,
}) => {
  const handleChange = (prop: keyof RectanglesSketchParams) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSketchParams({ ...sketchParams, [prop]: +event.target.value });
  };
  return (
    <form>
      <StyledNumberInput
        title="Ancho del lugar"
        unit="m"
        value={sketchParams.widthPlace}
        onChange={handleChange('widthPlace')}
      />
      <br />
      <StyledNumberInput
        title="Largo del lugar"
        unit="m"
        value={sketchParams.heightPlace}
        onChange={handleChange('heightPlace')}
      />
      <br />
      <StyledNumberInput
        title="Ancho de una mesa"
        unit="m"
        value={sketchParams.widthTable}
        onChange={handleChange('widthTable')}
      />
      <br />
      <StyledNumberInput
        title="Largo de una mesa"
        unit="m"
        value={sketchParams.heightTable}
        onChange={handleChange('heightTable')}
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

export default RectLayoutInputs;
