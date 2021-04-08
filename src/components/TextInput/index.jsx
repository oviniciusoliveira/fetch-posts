import P from 'prop-types';
import './styles.css';

function TextInput({ searchValue, handleChange }) {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      type="search"
      value={searchValue}
      placeholder="Pesquisar posts"
    />
  );
}

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};

export default TextInput;
