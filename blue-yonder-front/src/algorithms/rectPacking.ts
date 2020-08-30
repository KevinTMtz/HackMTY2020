import ShelfPack from '@mapbox/shelf-pack';

export interface RectanglesSketchParams {
  widthPlace: number;
  heightPlace: number;
  widthTable: number;
  heightTable: number;
  distanceBetween: number;
}

export interface Rectangle {
  x: number;
  y: number;
  w: number;
  h: number;
}

export const calcRectPacking = (
  params: RectanglesSketchParams,
): Rectangle[] => {
  const widthRect = params.widthTable + params.distanceBetween;
  const heightRect = params.heightTable + params.distanceBetween;
  const numRects = Math.max(
    Math.floor(params.widthPlace / widthRect) *
      Math.floor(params.heightPlace / heightRect),
    Math.floor(params.widthPlace / heightRect) *
      Math.floor(params.heightPlace / widthRect),
  );
  const verticalRect = {
    w: widthRect,
    h: heightRect,
  };
  const verticalRects = Array.from({ length: numRects }, () => verticalRect);
  const horizontalRect = {
    w: heightRect,
    h: widthRect,
  };
  const horizontalRects = Array.from(
    { length: numRects },
    () => horizontalRect,
  );
  // Case 1: verticals first
  const place1 = new ShelfPack(params.widthPlace, params.heightPlace);
  const rects1 = place1.pack(verticalRects.concat(horizontalRects));
  // Case 2: horizontal first
  const place2 = new ShelfPack(params.widthPlace, params.heightPlace);
  const rects2 = place2.pack(horizontalRects.concat(verticalRects));
  // Case 3: alternating
  const place3 = new ShelfPack(params.widthPlace, params.heightPlace);
  const rects3 = place3.pack(
    Array.from({ length: 2 * numRects }, (_, i) =>
      i % 2 === 0 ? verticalRect : horizontalRect,
    ),
  );
  const maxLen = Math.max(rects1.length, rects2.length, rects3.length);
  return [rects1, rects2, rects3].find((arr) => arr.length === maxLen);
};
