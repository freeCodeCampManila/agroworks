import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'react-feather';
import Prices from './Prices';
import PriceChart from './PriceChart';
import Portfolio from './Portfolio';

const Dashboard = () => (
  <div className="dashboard">
    <div className="sidebar">
      <Link to="/" title="Logout">
        <LogOut className="fa" />
      </Link>
    </div>
    <div className="main">
      <div className="prices padded-noright">
        <Prices />
      </div>
      <div className="graph-portfolio padded">
        <div className="graph o-box-container padded">
          <PriceChart />
        </div>
        <div className="portfolio padded-top">
          <Portfolio />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
