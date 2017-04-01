import React, { Component } from 'react';
import _ from 'lodash';

import CandidatList from './widget/CandidatList';
import Graph from './widget/Graph';
import './Widget.scss';

const candidats = [
  {
    name: 'Jean-Luc Mélenchon',
    alias: 'melenchon',
  }, {
    name: 'Benoît Hamon',
    alias: 'hamon',
  }, {
    name: 'Emmanuel Macron',
    alias: 'macron',
  }, {
    name: 'François Fillon',
    alias: 'fillon',
  }, {
    name: 'Marine Le Pen',
    alias: 'lepen',
  },
];

const defaultScore = 8;
const base = 112 - defaultScore * candidats.length;

class Widget extends Component {
  constructor(props) {
    super(props);

    const progression = candidats.map(() => 'pause');

    this.state = {
      isLoading: true,
      series: this.getSeries(),
      progression,
    };
  }

  componentDidMount() {
    this.loop();
    setInterval(this.loop.bind(this), 15000);
  }

  loop() {
    this.setState({
      isLoading: true,
    });

    setTimeout(this.getNewState.bind(this), 2500);
  }

  getNewState() {
    const newSeries = this.getSeries();
    let progression = [];
    newSeries.map((value, index) => {
      const delta = value - this.state.series[index];
      if (delta == 0) {
        progression.push('pause');
      } else if (delta < 0) {
        progression.push('minus');
      } else {
        progression.push('plus');
      }
    });

    this.setState({
      isLoading: false,
      progression: progression,
      series: newSeries,
    });
  }

  getSeries() {
    let series = [];
    let total = 0;
    for (let i = 0; i < candidats.length - 1; i++) {
      const value = Math.floor(Math.random() * (base - total));
      total += value;
      series.push(value + defaultScore);
    }

    series.push(base - total + defaultScore);

    return _.shuffle(series);
  }

  render() {
    return (
      <div className="Widget">
        <h2>
          <div className="cocarde" />
          Suivez la Loterie Présidentielle<br /><strong>EN TEMPS RÉEL</strong>
        </h2>
        <CandidatList
          candidats={candidats.map((candidat) => candidat.alias)}
          isLoading={this.state.isLoading}
          progression={this.state.progression}
        />
        <Graph data={{
          labels: candidats.map((candidat) => candidat.name),
          series: this.state.series,
        }} />
      </div>
    );
  }
}

export default Widget;
