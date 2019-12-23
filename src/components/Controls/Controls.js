import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ nextPage, prevPage, prevBtnDisabled, nextBtnDisabled }) => (
  <section>
    <button
      type="button"
      className={styles.navButton}
      onClick={prevPage}
      disabled={prevBtnDisabled}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.navButton}
      onClick={nextPage}
      disabled={nextBtnDisabled}
    >
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
