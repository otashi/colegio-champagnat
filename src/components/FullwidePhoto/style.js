import styled from 'styled-components';

const StyledFullwidePhotoContainer = styled.div`
  position: relative;
  display: block;
  width: 100vw;
  height: 62vw;
  max-width: 1026px;
  max-height: 634px;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (min-width: 1026px) {
    margin: 3.2rem auto 0;
    border-radius: 1.6rem;
    box-shadow: 0 0.3rem 0.5rem 0 var(--n50a);
  }
`;

const StyledFullwidePhoto = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${({ contain }) => (contain ? 'contain' : 'cover')};
  width: inherit;
  height: inherit;
  max-width: inherit;
  max-height: inherit;
`;

export { StyledFullwidePhotoContainer, StyledFullwidePhoto };
