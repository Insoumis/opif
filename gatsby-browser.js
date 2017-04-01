import ReactGA from 'react-ga';
ReactGA.initialize('UA-96553346-1');

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.pathname);
};
