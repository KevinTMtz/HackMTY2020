import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  calcRectPacking,
  RectanglesSketchParams,
} from '../algorithms/rectPacking';
import RectLayoutInputs from '../components/RectLayoutInputs';
import RectLayoutSketch from '../components/RectLayoutSketch';

const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  #svgAndOptionDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #svgDiv {
    width: calc(100% - 40px);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 20px;
    margin: 20px 0px;
  }

  label {
    text-align: center;
  }
`;

const RectLayout: React.FC = () => {
  const [sketchParams, setSketchParams] = useState<RectanglesSketchParams>({
    widthPlace: 20,
    heightPlace: 10,
    widthTable: 1,
    heightTable: 0.7,
    distanceBetween: 1.5,
  });
  return (
    <div>
      <StyledH1>Dynamic Layout</StyledH1>
      <Wrapper>
        <RectLayoutInputs
          sketchParams={sketchParams}
          setSketchParams={setSketchParams}
        />
        <div id="svgAndOptionDiv">
          <label><input type="checkbox"/> Top </label>
          <div id="svgDiv">
            <label><input type="checkbox"/> Left </label>
            <RectLayoutSketch
              drawingParams={sketchParams}
              rects={calcRectPacking(sketchParams)}/>
            <label><input type="checkbox"/> Right </label>
          </div>
          <label><input type="checkbox"/> Bottom </label>
        </div>
      </Wrapper>
    </div>
  );
};

export default RectLayout;
