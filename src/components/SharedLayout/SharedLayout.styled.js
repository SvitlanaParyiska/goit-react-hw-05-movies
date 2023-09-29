import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 20px;
  border-bottom: solid 1px grey;
  box-shadow: 0 0 13px 3px grey;

  > nav {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

export const Link = styled(NavLink)`
  padding: 12px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #1f618d;
    box-shadow: 0 0 13px 2px grey;
  }
`;
