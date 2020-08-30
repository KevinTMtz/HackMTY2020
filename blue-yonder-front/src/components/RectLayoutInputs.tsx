import React from 'react';
import { RectanglesSketchParams } from '../algorithms/rectPacking';
import StyledNumberInput from '../components/StyledNumberInput';
import styled from '@emotion/styled';
import { auth, db } from '../firebase';
import firebase from 'firebase';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: wrap;

  #submitButton {
    border: 2px solid black;
    background: none;
    border-radius: 10px;
    padding: 0px 10px;
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

  function onSubmit (event: any) {
    event.preventDefault();

    const data = {
      anchoLugar: sketchParams.widthPlace,
      anchoMesa: sketchParams.widthTable,
      largoLugar: sketchParams.heightPlace,
      largoMesa: sketchParams.heightTable,
      sanaDistancia: sketchParams.distanceBetween
    }

    const db = firebase.firestore();
    db.collection('table').doc().set(data);
  }

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
