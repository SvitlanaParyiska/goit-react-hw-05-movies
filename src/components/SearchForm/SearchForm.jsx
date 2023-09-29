import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchFormSt,
  SearchFormButton,
  SearchFormInput,
} from './SearchForm.styled';

const SearchForm = ({ getSearchMovies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';

  const handleInputChange = ({ target: { value } }) => {
    value
      ? setSearchParams({ search: value.toLowerCase().trim() })
      : setSearchParams({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSearchMovies(query);
  };

  useEffect(() => {
    if (query) {
      getSearchMovies(query);
    }
  }, [getSearchMovies, query]);

  return (
    <SearchFormSt onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        name="search"
        autoFocus
        value={query}
        onChange={handleInputChange}
      ></SearchFormInput>
      <SearchFormButton type="submit">Search</SearchFormButton>
    </SearchFormSt>
  );
};

export default SearchForm;
