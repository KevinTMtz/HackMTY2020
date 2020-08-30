import React from 'react';
import styled from '@emotion/styled';
import firebase from 'firebase';
import { RectanglesSketchParams } from '../algorithms/rectPacking';
import StyledNumberInput from '../components/StyledNumberInput';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: wrap;

  #submitButton {
    border: 1px solid grey;
    background: none;
    border-radius: 10px;
    padding: 0px 10px;
    transition: 0.25s;
    font-weight: bold;
  }

  #submitButton:hover {
    border: 2px solid black;
    transform: scale(1.1);
  }
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

  const onSubmit = (event: any) => {
    event.preventDefault();
    const db = firebase.firestore();
    db.collection('table').doc().set(sketchParams);
  };

  return (
    <StyledForm onSubmit={(event) => onSubmit(event)}>
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
      <button type="submit" id="submitButton">
        Save
      </button>
    </StyledForm>
  );
};

export default RectLayoutInputs;
