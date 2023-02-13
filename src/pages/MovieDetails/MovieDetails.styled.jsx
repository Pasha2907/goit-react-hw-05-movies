import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
`;

export const MainContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const InfoContainer = styled.div``;

export const Image = styled.img`
  width: 350px;
  height: 100%;

  padding: 0;
  margin: 0;
`;

export const Description = styled.div`
  padding: 0;
  margin-left: 15px;
`;

export const MovieTitle = styled.h1`
  margin: 0;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 35px;
`;

export const UserVote = styled.h2`
  margin: 0;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 20px;
`;
export const Characteristics = styled.h2`
  margin: 0;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 25px;
`;

export const CharacteristicsDescription = styled.p`
  margin: 0;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 18px;
`;

export const Addition = styled.ul`
  list-style: none;
  margin: 0;
`;

export const AdditionTitle = styled.h2`
  margin: 0;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 25px;
`;
export const AdditionItem = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const AdditionLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  color: black;
  text-decoration: none;
  transition: 250ms color ease;

  :hover,
  :focus {
    color: #14299b;
  }
  &.active {
    color: #14299b;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: 250ms color ease;

  :hover {
    color: #3f51b5;
  }
`;
