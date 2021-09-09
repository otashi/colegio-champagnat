import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenu = styled.ul`
  display: grid;
  list-style: none;
  margin-left: 1.6rem;
  padding: 5.2rem 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
  }
`;

const StyledSection = styled.div`
  margin: 1.6rem 0;
`;

const StyledSectionItem = styled.li`
  font-size: 2.4rem;
  color: var(--n0);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledSubsectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0.8rem;
`;

const StyledSubsectionItem = styled.li`
  color: var(--n0);
  margin: 0.4rem 0 0.4rem 1.6rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export {
  StyledMenu,
  StyledSection,
  StyledSectionItem,
  StyledSubsectionList,
  StyledSubsectionItem,
};
