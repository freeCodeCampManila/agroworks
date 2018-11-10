import React, { Component } from 'react';

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
      res.json().then((prices) => {
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
      </div>
    );
  }
}

export default PriceChart;
