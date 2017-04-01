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

  getFirstOneText() {
    const { candidats, progression, series } = this.props;

    const index = _.indexOf(series, _.max(series));
    const candidat = candidats[index];

    if (progression[index] == 'plus') {
      return (
        <div className="Analysis">
          <strong className={candidat.alias}>{candidat.name}</strong>  caracole en tête !
        </div>
      );
    } else {
      return (
        <div className="Analysis">
          <strong className={candidat.alias}>{candidat.name}</strong> est en tête, mais pour combien de temps ?
        </div>
      );
    }
  }

  getFirstOnesText() {
    let { candidats, progression, series } = this.props;
    const first = _.indexOf(series, _.max(series));
    const firstOne = candidats[first];
    delete series[first];
    const second = _.indexOf(series, _.max(series));
    const secondOne = candidats[second];

    if (progression[first] == progression[second]) {
      return (
        <div className="Analysis">
          <strong className={firstOne.alias}>{firstOne.name}</strong> et <strong className={secondOne.alias}>{secondOne.name}</strong> : le bras de fer s'amorce.
        </div>
      );
    } else {
      return (
        <div className="Analysis">
          <strong className={secondOne.alias}>{secondOne.name}</strong> le seul vote "utile" pour contrer <strong className={firstOne.alias}>{firstOne.name}</strong> ?
        </div>
      );
    }
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

  getUndervaluedText() {
    const { candidats } = this.props;
    const nbr = Math.floor(Math.random() * candidats.length);
    const candidat = candidats[nbr];

    return (
      <div className="Analysis">
        Le score de <strong className={candidat.alias}>{candidat.name}</strong> est-il sous-évalué dans les sondages ?
      </div>
    );
  }

  getText() {
    const value = Math.floor(Math.random() * 4);

    switch (value) {
    case 0:
      return this.getFirstOneText();
    case 1:
      return this.getFirstOnesText();
    case 2:
      return this.getLastOneText();
    case 3:
      return this.getUndervaluedText();
    default:
      return this.getProgressionText();
    }
  }

  render() {
    return this.getText();
  }
}

export default Analysis;
