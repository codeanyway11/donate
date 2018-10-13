import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const ContentLayout = ({ children }) => (
  <div className="content_layout">
    {children}
    <style jsx>{styles}</style>
  </div>
);

ContentLayout.defaultProps = {
  children: null,
};

ContentLayout.propTypes = {
  children: PropTypes.node,
};

export default ContentLayout;
