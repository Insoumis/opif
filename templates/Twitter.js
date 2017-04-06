import React from 'react';
import { Timeline } from 'react-twitter-widgets';

import './Twitter.scss';

const Twitter = () => (
  <div className="Twitter">
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'InstitutOPIF'
      }}
      options={{
        tweetLimit: 5,
        linkColor: '#903'
      }}
    />
  </div>
);

export default Twitter;
