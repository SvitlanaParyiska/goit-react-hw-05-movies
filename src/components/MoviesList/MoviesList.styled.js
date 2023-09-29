import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;

  > p {
    margin: 0;
    display: inline-block;
    padding: 10px;
    &:hover {
      border-radius: 5px;
      color: white;
      background-color: #1f618d;
      box-shadow: 0 0 13px 2px grey;
    }
  }
`;

export const MovieItem = styled.li`
  padding: 0;
`;
