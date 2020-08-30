import React from 'react';
import TemporaryDrawer from './Drawer';
import styled from '@emotion/styled';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #673AB7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #512DA8, #673AB7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #512DA8, #673AB7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


`;

const Header: React.FC = () => (
  <StyledHeader>
    <TemporaryDrawer />
    <h1
      style={{
        marginRight: '25px',
        color: 'white',
      }}
    >
      [Nombre del projecto]
    </h1>
  </StyledHeader>
);

export default Header;
