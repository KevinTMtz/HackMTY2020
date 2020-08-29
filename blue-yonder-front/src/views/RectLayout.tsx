import React, { useState } from 'react';
import { calcRectPacking, DrawingParams } from '../algorithms/rectPacking';
import RectLayoutInputs from '../components/RectLayoutInputs';
import RectLayoutSketch from '../components/RectLayoutSketch';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`;

const RectLayout: React.FC = () => {
  const [drawingParams, setDrawingParams] = useState<DrawingParams>({
    widthPlace: 20,
    heightPlace: 10,
    widthTable: 1,
    heightTable: 0.7,
    distanceBetween: 1.5,
  });
  return (
    <div>
      <h1>RectLayout</h1>
      <Wrapper>
        <RectLayoutInputs
          drawingParams={drawingParams}
          setDrawingParams={setDrawingParams}
        />
        <RectLayoutSketch
          drawingParams={drawingParams}
          rects={calcRectPacking(drawingParams)}
        />
      </Wrapper>
    </div>
  );
};

export default RectLayout;
