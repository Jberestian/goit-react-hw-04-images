import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button className="loadMore" type="button" onClick={onClick}>
      <span>Load More</span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
