import React from 'react';
import { DrawingParams } from '../algorithms/rectPacking';
import StyledNumberInput from '../components/StyledNumberInput';

interface RectLayoutInputsProps {
  drawingParams: DrawingParams;
  setDrawingParams: React.Dispatch<React.SetStateAction<DrawingParams>>;
}

const RectLayoutInputs: React.FC<RectLayoutInputsProps> = ({
  drawingParams,
  setDrawingParams,
}) => {
  const handleChange = (prop: keyof DrawingParams) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDrawingParams({ ...drawingParams, [prop]: +event.target.value });
  };
  return (
    <form>
      <StyledNumberInput
        title="Ancho del lugar"
        unit="m"
        value={drawingParams.widthPlace}
        onChange={handleChange('widthPlace')}
      />
      <br />
      <StyledNumberInput
        title="Largo del lugar"
        unit="m"
        value={drawingParams.heightPlace}
        onChange={handleChange('heightPlace')}
      />
      <br />
      <StyledNumberInput
        title="Ancho de una mesa"
        unit="m"
        value={drawingParams.widthTable}
        onChange={handleChange('widthTable')}
      />
      <br />
      <StyledNumberInput
        title="Largo de una mesa"
        unit="m"
        value={drawingParams.heightTable}
        onChange={handleChange('heightTable')}
      />
      <br />
      <StyledNumberInput
        title="Sana distancia"
        unit="m"
        value={drawingParams.distanceBetween}
        onChange={handleChange('distanceBetween')}
      />
    </form>
  );
};

export default RectLayoutInputs;
