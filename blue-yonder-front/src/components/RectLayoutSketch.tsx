import React from 'react';
import { RectanglesSketchParams, Rectangle } from '../algorithms/rectPacking';

interface RectLayoutInputsProps {
  drawingParams: RectanglesSketchParams;
  rects: Rectangle[];
}

const RectLayoutSketch: React.FC<RectLayoutInputsProps> = ({
  drawingParams,
  rects,
}) => {
  const dist = drawingParams.distanceBetween / 2;
  return (
    <svg
      viewBox={`0 0 ${drawingParams.widthPlace} ${drawingParams.heightPlace}`}
    >
      <rect
        width={drawingParams.widthPlace}
        height={drawingParams.heightPlace}
        fill="blue"
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
          fill="purple"
        />
      ))}
      {rects.map((table, i) => (
        <rect
          key={i + '-table'}
          x={table.x + dist}
          y={table.y + dist}
          width={table.w - 2 * dist}
          height={table.h - 2 * dist}
          fill="red"
        />
      ))}
    </svg>
  );
};

export default RectLayoutSketch;
