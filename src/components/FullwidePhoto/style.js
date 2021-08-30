import styled from 'styled-components';

const StyledFullwidePhotoContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 62vw;
  max-width: 1026px;
  max-height: 634px;
`;

const StyledFullwidePhoto = styled.div`
  background-image: url(${(props) => props.src});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: inherit;
  height: inherit;
  max-width: inherit;
  max-height: inherit;
`;

export { StyledFullwidePhotoContainer, StyledFullwidePhoto };
