import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import firebase from 'firebase';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import {
  calcRectPacking,
  RectanglesSketchParams,
} from '../algorithms/rectPacking';
import RectLayoutSketch from '../components/RectLayoutSketch';

const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Center = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RectReservation: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const [sketchParams, setSketchParams] = useState<
    RectanglesSketchParams | undefined
  >(undefined);
  useEffect(() => {
    const db = firebase.firestore();
    db.collection('table')
      .doc(match.params.id)
      .get()
      .then((doc) => setSketchParams(doc.data() as RectanglesSketchParams));
  });
  return (
    <div>
      <StyledH1>Make a reservation!</StyledH1>
      {sketchParams === undefined ? (
        <Center>
          <BounceLoader color="#3895d3" />
        </Center>
      ) : (
        <Wrapper>
          <RectLayoutSketch
            sketchParams={sketchParams}
            rects={calcRectPacking(sketchParams)}
          />
        </Wrapper>
      )}
    </div>
  );
};

export default withRouter(RectReservation);
