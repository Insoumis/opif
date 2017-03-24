import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

const options = {
  distributeSeries: true,
  low: 0,
  high: 100,
  height: 250,
};

const type = 'Bar';

class Graph extends Component {
  static propTypes = {
    data: React.PropTypes.object,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.data.series != this.props.data.series;
  }

  render() {
    const { data } = this.props;

    this.seq = 0;

    return(
      <ChartistGraph
        data={data}
        listener={{
          draw: (data) => {
            if (data.type === 'bar') {
              data.element.animate({
                y2: {
                  begin: this.seq * 250,
                  dur: 500,
                  from: data.y1,
                  to: data.y2,
                  easing: [0.23, 1, 0.32, 1],
                }
              });

              data.group.elem('text', {
                x: data.x1,
                y: data.y2 - 10,
                style: 'text-anchor: middle'
              }, 'ct-value').text(data.value.y).animate({
                opacity: {
                  begin: this.seq * 250 + 500,
                  dur: 200,
                  from: 0,
                  to: 1
                },
                y: {
                  begin: this.seq * 250 + 500,
                  dur: 200,
                  from: data.y2 - 30,
                  to: data.y2 - 10,
                  easing: [0.23, 1, 0.32, 1],
                }
              });

              this.seq++;
            }
          }
        }}
        options={options}
        type={type}
      />
    );
  }
}

export default Graph;
