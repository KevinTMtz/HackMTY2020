import React from 'react';
import { RectanglesSketchParams, Rectangle } from '../algorithms/rectPacking';
import styled from '@emotion/styled';

const StyledSvg = styled.svg`
  margin: 0px 20px;
  max-height: 60vh;
  flex-grow: 1;
`;

interface RectLayoutInputsProps {
  sketchParams: RectanglesSketchParams;
  rects: Rectangle[];
}

const RectLayoutSketch: React.FC<RectLayoutInputsProps> = ({
  sketchParams,
  rects,
}) => {
  const dist = sketchParams.distanceBetween / 2;
  return (
    <StyledSvg
      viewBox={`0 0 ${sketchParams.widthPlace} ${sketchParams.heightPlace}`}
    >
      <rect
        width={sketchParams.widthPlace}
        height={sketchParams.heightPlace}
        fill="#d1ccc0"
      />
      {rects.map((table, i) => (
        <rect
          key={i + '-area'}
          x={table.x}
          y={table.y}
          width={table.w}
          height={table.h}
          rx={dist}
          ry={dist}
          fill="#66bb6a"
        />
      ))}
      {rects.map((table, i) => (
        <rect
          key={i + '-table'}
          x={table.x + dist}
          y={table.y + dist}
          width={table.w - 2 * dist}
          height={table.h - 2 * dist}
          fill="#5d4037"
        />
      ))}
    </StyledSvg>
  );
};

export default RectLayoutSketch;
