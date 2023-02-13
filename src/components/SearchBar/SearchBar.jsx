import { useState } from 'react';
import PropTypes from 'prop-types';
import { HiSearch } from 'react-icons/hi';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './SearchBar.styled';

export function SearchBar({ onSubmit }) {
  const [inputName, setInputName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (inputName.trim() === '') {
      return () => alert('Searchign form is empty! Please input some text.');
    }
    onSubmit(inputName);
    setInputName('');
  };

  const handleChange = e => {
    setInputName(e.target.value.toLowerCase());
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <HiSearch style={{ width: 30, height: 30 }} />
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies..."
          onChange={handleChange}
          name="inputName"
          value={inputName}
        />
      </SearchForm>
    </SearchBarHeader>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
