import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieList = styled.ol`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 22px;
`;

export const MovieItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  :hover,
  :focus {
    color: #3f51b5;
  }
  &.active {
    color: #3f51b5;
  }
`;
