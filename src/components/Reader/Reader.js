import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
      }).isRequired,
    ).isRequired,
  };

  state = {
    publicationIndex: 0,
  };

  nextPage = () => {
    this.setState(state => ({ publicationIndex: state.publicationIndex + 1 }));
  };

  prevPage = () => {
    this.setState(state => ({ publicationIndex: state.publicationIndex - 1 }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const publication = items[publicationIndex];
    const totalPages = items.length;
    const prevBtnDisabled = publicationIndex < 1;
    const nextBtnDisabled = publicationIndex >= totalPages - 1;
    return (
      <div>
        <Controls
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
        />
        <Progress
          publicationIndex={publicationIndex + 1}
          totalPages={totalPages}
        />
        <Publication title={publication.title} text={publication.text} />
      </div>
    );
  }
}
