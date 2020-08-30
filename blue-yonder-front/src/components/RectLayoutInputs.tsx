import React from 'react';
import { RectanglesSketchParams } from '../algorithms/rectPacking';
import StyledNumberInput from '../components/StyledNumberInput';
import styled from '@emotion/styled';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

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
    <StyledForm>
      <StyledNumberInput
        title="Ancho del lugar"
        unit="m"
        value={sketchParams.widthPlace}
        onChange={handleChange('widthPlace')}
      />
      <StyledNumberInput
        title="Largo del lugar"
        unit="m"
        value={sketchParams.heightPlace}
        onChange={handleChange('heightPlace')}
      />
      <StyledNumberInput
        title="Ancho de una mesa"
        unit="m"
        value={sketchParams.widthTable}
        onChange={handleChange('widthTable')}
      />
      <StyledNumberInput
        title="Largo de una mesa"
        unit="m"
        value={sketchParams.heightTable}
        onChange={handleChange('heightTable')}
      />
      <StyledNumberInput
        title="Sana distancia"
        unit="m"
        value={sketchParams.distanceBetween}
        onChange={handleChange('distanceBetween')}
      />
    </StyledForm>
  );
};

export default RectLayoutInputs;
