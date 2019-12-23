import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ publicationIndex, totalPages }) => (
  <p>
    {publicationIndex}/{totalPages}
  </p>
);

Progress.propTypes = {
  publicationIndex: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Progress;
