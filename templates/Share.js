import React from 'react';

const Share = ({ twitterText, url }) => (
  <div className="share">
    <span>Partager :</span>
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      onClick={(e) => {
        e.preventDefault();
        window.open(e.target, 'Partager sur Facebook', 'width=560,height=430');
      }}
    >
      <i className="fa fa-lg fa-facebook-square" aria-hidden="true"></i> Facebook
    </a>
    <a
      href={`https://twitter.com/home?status=${twitterText}`}
      onClick={(e) => {
        e.preventDefault();
        window.open(e.target, 'Partager sur Twitter', 'width=430,height=284');
      }}
    >
      <i className="fa fa-lg fa-twitter-square" aria-hidden="true"></i> Twitter
    </a>
    <a
      href={`https://plus.google.com/share?url=${url}`}
      onClick={(e) => {
        e.preventDefault();
        window.open(e.target, 'Partager sur Google+', 'width=400,height=415');
      }}
    >
      <i className="fa fa-lg fa-google-plus-square" aria-hidden="true"></i> Google+
    </a>
  </div>
);

Share.propTypes = {
  twitterText: React.PropTypes.string,
  url: React.PropTypes.string,
};

export default Share;
