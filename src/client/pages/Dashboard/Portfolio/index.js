import React from 'react';

function fetchData(callback) {
  return fetch('http://localhost:8080/api/portfolio')
    .then(response => response.json())
    .then(data => callback(data));
}
class Portfolio extends React.Component {
  state = {
    portfolioData: []
  };

  componentDidMount() {
    fetchData(data => this.setState({ portfolioData: data }));
  }

  render() {
    const { portfolioData } = this.state;
    return (
      <div className="o-box-container portfolio-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Fulfillment Date</th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.map(data => (
              <tr key={data.contractId}>
                <th>{data.contractId}</th>
                <td>{data.productName}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td>{new Date(data.fulfillmentDate).toLocaleDateString('en-US')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Portfolio;
