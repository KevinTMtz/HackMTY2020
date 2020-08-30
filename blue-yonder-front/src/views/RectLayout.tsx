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
    walkOnSide: {
      top: true,
      right: true,
      bottom: true,
      left: true,
    },
  });

  const changeCheck = (side: 'top' | 'right' | 'bottom' | 'left') => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSketchParams({
      ...sketchParams,
      walkOnSide: {
        ...sketchParams.walkOnSide,
        [side]: !sketchParams.walkOnSide[side],
      },
    });
  };
  return (
    <div>
      <StyledH1>Dynamic Layout</StyledH1>
      <Wrapper>
        <RectLayoutInputs
          sketchParams={sketchParams}
          setSketchParams={setSketchParams}
        />
        <div id="svgAndOptionDiv">
          <label>
            <input
              type="checkbox"
              checked={sketchParams.walkOnSide.top}
              onChange={changeCheck('top')}
            />{' '}
            Top{' '}
          </label>
          <div id="svgDiv">
            <label>
              <input
                type="checkbox"
                checked={sketchParams.walkOnSide.left}
                onChange={changeCheck('left')}
              />{' '}
              Left{' '}
            </label>
            <RectLayoutSketch
              sketchParams={sketchParams}
              rects={calcRectPacking(sketchParams)}
            />
            <label>
              <input
                type="checkbox"
                checked={sketchParams.walkOnSide.right}
                onChange={changeCheck('right')}
              />{' '}
              Right{' '}
            </label>
          </div>
          <label>
            <input
              type="checkbox"
              checked={sketchParams.walkOnSide.bottom}
              onChange={changeCheck('bottom')}
            />{' '}
            Bottom{' '}
          </label>
        </div>
      </Wrapper>
    </div>
  );
};

export default RectLayout;
