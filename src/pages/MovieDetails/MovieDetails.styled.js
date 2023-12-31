import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  > img {
    height: 100%;
  }
`;

export const Img = styled.img`
  box-shadow: 0 0 10px 1px grey;
`;

export const LinkBack = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 6px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #0a0d20;
  background: linear-gradient(317deg, #26fff2 13.2%, #326cff 51.54%);
  font-weight: 500;

  &:hover {
    background-color: #1f618d;
    box-shadow: 0 0 13px 2px grey;
  }
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`;

export const AdditionalBox = styled.div`
  padding: 20px;
  margin-top: 15px;
  box-shadow: 0 0 6px 1px grey;
  > ul {
    > li {
      display: block;
      margin-top: 10px;
    }
  }
`;

export const InfoLink = styled(NavLink)`
  display: inline-block;
  margin-bottom: 10px;
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #0a0d20;
  background: linear-gradient(317deg, #26fff2 13.2%, #326cff 51.54%);
  font-weight: 500;

  &:hover {
    background-color: #a9cce3;
    box-shadow: 0 0 13px 2px grey;
  }
  &.active {
    background-color: #1f618d;
    box-shadow: 0 0 13px 2px grey;
  }
`;
