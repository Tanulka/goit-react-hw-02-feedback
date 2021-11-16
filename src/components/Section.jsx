import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title = '', children }) => (
  <section>
    {title && <header>{title}</header>}
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
