import React from 'react';
import TemporaryDrawer from './Drawer';
import styled from '@emotion/styled';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #74ebd5;
  background: -webkit-linear-gradient(to bottom, #ACB6E5, #74ebd5);
  background: linear-gradient(to bottom, #ACB6E5, #74ebd5);

`;

const Header: React.FC = () => (
  <StyledHeader>
    <TemporaryDrawer />
    <h1
      style={{
        marginRight: '25px',
      }}
    >
      [Nombre del projecto]
    </h1>
  </StyledHeader>
);

export default Header;
