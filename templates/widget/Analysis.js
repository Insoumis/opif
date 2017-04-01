import React, { Component } from 'react';
import _ from 'lodash';

import './Analysis.scss';

class Analysis extends Component {
  static propTypes = {
    candidats: React.PropTypes.array,
    progression: React.PropTypes.array,
    series: React.PropTypes.array,
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.progression != this.props.progression) {
      return true;
    }

    return false;
  }

  getProgressionText() {
    const { candidats, progression } = this.props;

    const nbr = Math.floor(Math.random() * candidats.length);
    let candidat = candidats[nbr];
    candidat = <strong className={candidat.alias}>{candidat.name}</strong>;

    return (
      <div className="Analysis">
        {(progression[nbr] == 'pause') ?
        <span>{candidat} reste stable, mais est-ce que cela va durer ? Seul notre nouveau sondage vous le dira.</span>
        : false}
        {(progression[nbr] == 'minus') ?
        <span>{candidat} peine à convaincre et s'effondre dans notre dernière enquête.</span>
        : false}
        {(progression[nbr] == 'plus') ?
        <span>Remontée spéctaculaire de {candidat}, dans une très bonne dynamique ces 15 dernières secondes !</span>
        : false}
      </div>
    );
  }

  getFirstOnesText() {
    let { candidats, series } = this.props;
    let first = _.indexOf(series, _.max(series));
    delete series[first];
    let second = _.indexOf(series, _.max(series));
    first = candidats[first];
    second = candidats[second];

    return (
      <div className="Analysis">
        <strong className={second.alias}>{second.name}</strong> le seul vote "utile" pour contrer <strong className={first.alias}>{first.name}</strong> ?
      </div>
    );
  }

  getLastOneText() {
    const { candidats, progression, series } = this.props;

    const index = _.indexOf(series, _.min(series));
    const candidat = candidats[index];

    if (progression[index] == 'plus') {
      return (
        <div className="Analysis">
          La petite remontée de <strong className={candidat.alias}>{candidat.name}</strong> lui offre-t-elle encore une chance de revenir dans cette campagne ?
        </div>
      );
    } else {
      return (
        <div className="Analysis">
          <strong className={candidat.alias}>{candidat.name}</strong> semble définitivement hors course.
        </div>
      );
    }
  }

  getText() {
    const value = Math.floor(Math.random() * 3);

    switch (value) {
    case 0:
      return this.getFirstOnesText();
    case 1:
      return this.getLastOneText();
    default:
      return this.getProgressionText();
    }
  }

  render() {
    return this.getText();
  }
}

export default Analysis;
