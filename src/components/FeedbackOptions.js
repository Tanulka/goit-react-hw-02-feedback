import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  state = {
    buttons: ['good', 'neutral', 'bad'],
  };

  static propTypes = {
    handleOnClick: PropTypes.func,
  };

  render() {
    const { buttons } = this.state;
    const { handleOnClick } = this.props;
    return buttons.map(button => (
      <button type="button" key={button} name={button} onClick={handleOnClick}>
        {button}
      </button>
    ));
  }
}

export default FeedbackOptions;
