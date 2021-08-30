import styled from 'styled-components';

const StyledPhotoContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 62vw;
  max-width: 1026px;
  max-height: 634px;
`;

const StyledPhotoFilter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--n70a);
`;

export { StyledPhotoContainer, StyledPhotoFilter };
