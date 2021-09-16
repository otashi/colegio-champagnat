import styled, { keyframes } from 'styled-components';

const StyledLoading = styled.div`
  color: var(--n10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledIcon = styled.i`
  animation: ${rotate} 4s linear infinite;
`;

const StyledText = styled.p``;

export { StyledLoading, StyledIcon, StyledText };
