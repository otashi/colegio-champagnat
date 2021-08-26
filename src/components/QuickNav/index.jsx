import React, { useState } from 'react';
import { StyledQuickNav, StyledQuickNavTitle, StyledIcon } from './style';

const QuickNav = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <StyledQuickNav onClick={toggleMenu}>
      <StyledQuickNavTitle>Enlaces rápidos</StyledQuickNavTitle>
      {!menu ? (
        <StyledIcon className='ci-chevron_big_down' />
      ) : (
        <StyledIcon className='ci-chevron_big_up' />
      )}
    </StyledQuickNav>
  ); 
};

export { QuickNav };
