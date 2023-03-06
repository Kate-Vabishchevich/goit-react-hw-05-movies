import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './SearchForm.module.css';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
    const [search, setSearch] = useState('');

    const onInputChange = e => setSearch(e.target.value);
    // console.log('e:', e.target.value);

    const onSubmitForm = e => {
        e.preventDefault();
        onSubmit(search.trim());
        setSearch('');
    }

    return (
        <form className={css.form} onSubmit={onSubmitForm}>
            <input
                className={css.input}
                onChange={onInputChange}
                value={search}
                name="search"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
            />
            <button type="submit" className={css.button}>
                <span className={css.button_label}></span>
                <AiOutlineSearch size="24px" />
            </button>
        </form>
    );
 }

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};