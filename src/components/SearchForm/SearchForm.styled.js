import styled from 'styled-components';

export const SearchFormSt = styled.form`
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  cursor: pointer;
  &:hover {
    color: white;
    background-color: #1f618d;
    box-shadow: 0 0 13px 2px grey;
  }
`;

export const SearchFormInput = styled.input`
  width: 300px;
  height: 40px;
  font: inherit;
  font-size: 16px;
  border: solid 1px grey;
  outline: none;
  padding: 5px 5px 5px 15px;
`;
