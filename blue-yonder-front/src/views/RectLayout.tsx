import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  calcRectPacking,
  RectanglesSketchParams,
} from '../algorithms/rectPacking';
import RectLayoutInputs from '../components/RectLayoutInputs';
import RectLayoutSketch from '../components/RectLayoutSketch';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
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
      <StyledH1>RectLayout</StyledH1>
      <Wrapper>
        <RectLayoutInputs
          sketchParams={sketchParams}
          setSketchParams={setSketchParams}
        />
        <RectLayoutSketch
          drawingParams={sketchParams}
          rects={calcRectPacking(sketchParams)}
        />
      </Wrapper>
    </div>
  );
};

export default RectLayout;
