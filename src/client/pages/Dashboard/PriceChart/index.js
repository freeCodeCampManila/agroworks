import React, { Component } from 'react';
import Chart from './Chart';

class PriceChart extends Component {
  state = {
    prices: null
  };

  componentDidMount() {
    this.fetchPrices('rice');
  }

  changeCommodity = (e) => {
    e.preventDefault();

    this.fetchPrices(e.target.value);
  };

  fetchPrices = (commodity) => {
    fetch(`http://localhost:8080/api/prices/${commodity}`).then((res) => {
      res.json().then((rawPrices) => {
        const prices = rawPrices.map((rawPrice) => {
          const price = Object.assign(rawPrice, {
            date: new Date(rawPrice.date)
          });

          return price;
        });

        this.setState({ prices });
      });
    });
  }

  renderDropDown = () => (
    <select onChange={this.changeCommodity}>
      <option value="rice">Rice</option>
      <option value="wheat">Wheat</option>
      <option value="maize">Maize</option>
    </select>
  );

  render() {
    const { prices } = this.state;

    if (!prices) {
      return (
        <div className="price-chart">
          Loading...
        </div>
      );
    }

    return (
      <div className="price-chart">
        {this.renderDropDown()}

        <Chart data={prices} />
      </div>
    );
  }
}

export default PriceChart;
