import styled from 'styled-components';

const StyledFullwidePhotoContainer = styled.div`
  position: relative;
  display: block;
  width: 100vw;
  height: 62vw;
  max-width: 1026px;
  max-height: 634px;
  margin: 0 auto;

  @media screen and (min-width: 1026px) {
    margin: 3.2rem auto 0;
  }
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
