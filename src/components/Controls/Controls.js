import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ nextPage, prevPage, prevBtnDisabled, nextBtnDisabled }) => (
  <section>
    <button type="button" onClick={prevPage} disabled={prevBtnDisabled}>
      Назад
    </button>
    <button type="button" onClick={nextPage} disabled={nextBtnDisabled}>
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
};

export default Controls;
