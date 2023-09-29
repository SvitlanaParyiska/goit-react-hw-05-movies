import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchFormSt,
  SearchFormButton,
  SearchFormInput,
} from './SearchForm.styled';

const SearchForm = ({ getSearchMovies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    value
      ? setSearchParams({ search: value.toLowerCase().trim() })
      : setSearchParams({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.search.value;

    if (value === '') {
      Notiflix.Notify.failure('Fill in the form!');
    }
    setSearchQuery(value);
  };

  useEffect(() => {
    searchQuery && getSearchMovies(searchQuery);
  }, [getSearchMovies, searchQuery]);

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
