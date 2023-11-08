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
  color: #0a0d20;
  font-weight: 500;
  background: linear-gradient(317deg, #26fff2 13.2%, #326cff 51.54%);

  &.active {
    background: linear-gradient(317deg, #26fff2 13.2%, #326cff 71.54%);
    box-shadow: 0px 0px 27px 8px #326cff;
  }
`;
