import React from 'react';
import TemporaryDrawer from './Drawer';
import styled from '@emotion/styled';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  
  h1 {
    margin: 10px 25px 10px 0px;
    color: white;
  }
`;

const Header: React.FC = () => (
  <StyledHeader>
    <TemporaryDrawer/>
    <h1>Space Planner</h1>
  </StyledHeader>
);

export default Header;
