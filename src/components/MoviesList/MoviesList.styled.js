import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const MovieThumb = styled.div`
  box-shadow: 0 0 10px 1px grey;
  border-radius: 5px;
  overflow: hidden;
  width: 250px;
  height: 450px;
  > h4 {
    max-width: 250px;
    margin: 0;
    text-align: center;
    display: block;
    padding: 20px 5px;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  &:hover,
  &:focus {
    > div {
      box-shadow: 0px 0px 27px 8px #326cff;
    }
  }
`;

export const MovieItem = styled.li`
  padding: 0;
`;
