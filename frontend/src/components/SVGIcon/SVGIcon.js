import React from 'react';
import PropTypes from 'prop-types';

const SVGIcon = ({ icon, style }) => (
  <svg
    style={Object.assign({}, { fontSize: 'inherit', color: 'inherit' }, style)}
    fill="currentColor"
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
  >
    <path style={{ color: 'inherit' }} d={icon.join(' ')} />
  </svg>
);

SVGIcon.defaultProps = {
  style: {},
};

SVGIcon.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.shape({}),
};

export default SVGIcon;
