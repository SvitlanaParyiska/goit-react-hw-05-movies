import { Link } from 'react-router-dom';
import styled from 'styled-components';
// :root {
//   --main-transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   --brand-grd: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);
// }

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
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
      box-shadow: 0px 0px 27px 8px rgba(3, 2, 15, 0.75);
    }
  }
`;

export const MovieItem = styled.li`
  padding: 0;
`;
