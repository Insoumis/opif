import React from 'react';
import { Row, Col } from 'react-grid-system';

import './CandidatList.scss';

const CandidatList = ({ candidats, isLoading, progression }) => (
  <Row className="CandidatList">
    {candidats.map((candidat, i) => {
      return (
        <Col
          className={`${candidat}${(isLoading) ? ' loading' : ''}`}
          key={i}
          xs={2}
          offset={(i == 0) ? {xs: 1} : {}}
        >
          {(isLoading) ?
          <i className="fa fa-spinner fa-spin"></i>
          : false}
          <div className={progression[i]}>
            <div className="picture" />
            <div className="sign">
              <i className={`fa fa-${(isLoading) ? 'question' : progression[i]}-circle`} aria-hidden="true"></i>
            </div>
          </div>
        </Col>
      );
    })}
  </Row>
);

CandidatList.propTypes = {
  candidats: React.PropTypes.array,
  isLoading: React.PropTypes.bool,
  progression: React.PropTypes.array,
};

export default CandidatList;
