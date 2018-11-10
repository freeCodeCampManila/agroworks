import React from "react";
import Prices from "./Prices";
import PriceChart from "./PriceChart";
import Portfolio from "./Portfolio";
import { LogOut } from "react-feather";

const Dashboard = () => (
  <div className="dashboard">
    <div className="sidebar">
      <LogOut className="fa" />
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
