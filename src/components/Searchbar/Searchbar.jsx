import { useState } from 'react';
import fields from './fields';
import PropTypes from 'prop-types';
import TextField from 'shared/TextField/TextField';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleChange = event => {
    setState(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (state.value === '') {
      alert('Введите новый запрос');
    }
    onSubmit(state);
    setState('');
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <button type="submit" className="searchForm-button">
        Search Images
      </button>

      <TextField value={state} onChange={handleChange} {...fields.search} />
    </form>
  );
};

export default Searchbar;

Searchbar.defaultProps = {
  onSubmit: () => {},
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
