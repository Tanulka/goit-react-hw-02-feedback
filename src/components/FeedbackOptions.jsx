import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ handleOnClick }) => {
  const buttons = ['good', 'neutral', 'bad'];
  return (
    <>
      {buttons.map(button => (
        <button
          type="button"
          key={button}
          name={button}
          onClick={e => {
            handleOnClick(e);
          }}
        >
          {button}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.string.isRequired,
      neutral: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired,
    }),
  ).isRequired,

  handleOnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
