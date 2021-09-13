import styled from 'styled-components';

const StyledCardPhotoContainer = styled.div`
  position: relative;
  width: 14rem;
  height: 14rem;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 0.3rem 0.5rem 0 var(--n50a);

  @media screen and (min-width: 1024px) {
    width: 20rem;
    height: 20rem;
  }
`;

const StyledCardPhoto = styled.div`
  background-image: url(${(props) => props.src});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: inherit;
  height: inherit;
`;

export { StyledCardPhotoContainer, StyledCardPhoto };
