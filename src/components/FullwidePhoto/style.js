import styled from 'styled-components';

const StyledFullwidePhoto = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 62vw;
  max-width: 1026px;
  max-height: 634px;
`;

export { StyledFullwidePhoto };
