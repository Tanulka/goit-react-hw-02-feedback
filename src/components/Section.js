import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static defaultProps = {
    title: '',
  };

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section>
        {title && <header>{title}</header>}
        {children}
      </section>
    );
  }
}

export default Section;
