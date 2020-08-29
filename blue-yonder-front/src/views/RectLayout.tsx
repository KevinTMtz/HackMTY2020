import React, { useState } from 'react';
import StyledNumberInput from '../components/StyledNumberInput';

interface DrawingParams {
  widthPlace: number;
  heightPlace: number;
  widthTable: number;
  heightTable: number;
}

const RectLayout: React.FC = () => {
  const [drawingParams, setDrawingParams] = useState<DrawingParams>({
    widthPlace: 0,
    heightPlace: 0,
    widthTable: 0,
    heightTable: 0,
  });
  const handleChange = (prop: keyof DrawingParams) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDrawingParams({ ...drawingParams, [prop]: +event.target.value });
  };
  return (
    <div>
      <h1>RectLayout</h1>
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
      </form>
    </div>
  );
};

export default RectLayout;
