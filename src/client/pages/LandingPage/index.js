import React from 'react';
import Undraw from '../../../../public/undraw-analytics.svg';
import '../../styles/main.scss';

const LandingPage = () => (
  <div className="landing-page">
    <header className="o-row container header">
      <h1 className="title">agrowork</h1>
      <div>
        <button type="button" className="btn">
          Login
        </button>
      </div>
    </header>
    <section className="o-row container hero">
      <div className="o-col description">
        <div>
          <h2 className="text">
            <span>Start</span>
            {' '}
selling and buying agriculture products &amp; enjoy the
            {' '}
            <span>profit</span>
!
          </h2>
          <button type="button" className="btn">
            Start here
          </button>
        </div>
      </div>
      <div className="o-col">
        <img src={Undraw} alt="graph, buy, sell and have fun" />
      </div>
    </section>
  </div>
);

export default LandingPage;
