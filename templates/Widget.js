import React, { Component } from 'react';
import _ from 'lodash';

import CandidatList from './widget/CandidatList';
import Graph from './widget/Graph';
import Analysis from './widget/Analysis';
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
let counterInterval;

class Widget extends Component {
  constructor(props) {
    super(props);

    // const progression = candidats.map(() => 'pause');
    const progression = ['plus', 'pause', 'minus', 'minus', 'minus'];
    const series = [82, 4.93, 3, -4, -5];

    this.state = {
    //   counter: 15,
    //   isLoading: true,
    //   series: this.getSeries(),
      series,
      progression,
    };
  }

  componentDidMount() {
    // this.loop();
    // setInterval(this.loop.bind(this), 15000);
  }

  loop() {
    clearInterval(counterInterval);

    this.setState({
      counter: 15,
      isLoading: true,
    });

    counterInterval = setInterval(() => this.setState({ counter : this.state.counter - 1}), 1000);

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
      series: newSeries
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
        <div className="counter visible">
          Plus de nouveaux sondages avant les élections !
        </div>
        <CandidatList
          candidats={candidats.map((candidat) => candidat.alias)}
          isLoading={false}
          progression={this.state.progression}
        />
        <Graph data={{
          labels: candidats.map((candidat) => candidat.name),
          series: this.state.series,
        }} />
        <Analysis
          candidats={candidats}
          progression={this.state.progression}
          series={this.state.series}
        />
        <div className="disclaimer">
          © 2017 Institut Opif, Sondage réalisé sur un échantillon représentatif de 346 ornithorynques, résultats redressés selon l'âge du capitaine. Marge d'erreur : 45% ... ou un truc de la même farine ...
        </div>
      </div>
    );
  }
}

export default Widget;
