import styled from 'styled-components';

export const SearchFormSt = styled.form`
  margin: 20px auto;
  display: flex;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 5px 1px grey;
`;

export const SearchFormButton = styled.button`
  width: 140px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #0a0d20;
  background: linear-gradient(317deg, #26fff2 13.2%, #326cff 51.54%);
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #1f618d;
    box-shadow: 0 0 13px 2px grey;
  }
`;

export const SearchFormInput = styled.input`
  width: 100%;
  height: 40px;
  font: inherit;
  font-size: 16px;
  border: solid 1px grey;
  outline: none;
  padding: 5px 5px 5px 15px;
`;
