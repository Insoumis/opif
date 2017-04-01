import React, { Component } from 'react';

import './Analysis.scss';

class Analysis extends Component {
  static propTypes = {
    candidats: React.PropTypes.array,
    progression: React.PropTypes.array,
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.progression != this.props.progression) {
      return true;
    }

    return false;
  }

  getText() {
    const { candidats, progression } = this.props;

    const nbr = Math.floor(Math.random() * candidats.length);
    let candidat = candidats[nbr];
    candidat = <strong className={candidat.alias}>{candidat.name}</strong>;

    return (
      <div className="Analysis">
        {(progression[nbr] == 'pause') ?
        <span>{candidat} au point mort.</span>
        : false}
        {(progression[nbr] == 'minus') ?
        <span>{candidat} s'effondre.</span>
        : false}
        {(progression[nbr] == 'plus') ?
        <span>Remontée spéctaculaire de {candidat}.</span>
        : false}
      </div>
    );
  }

  render() {
    return this.getText();
  }
}

export default Analysis;
