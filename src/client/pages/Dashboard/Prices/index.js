import React from 'react';

const Prices = () => (
  <div className="o-box-container prices-wrapper">
    <table className="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Ask</th>
          <th>Bid</th>
          <th>Low</th>
          <th>High</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>RICE</strong>
          </td>
          <td>
            <div className="btn btn-high">143.017</div>
          </td>
          <td>
            <div className="btn btn-high">143.035</div>
          </td>
          <td>142.396</td>
          <td>144.018</td>
        </tr>
        <tr>
          <td>
            <strong>Maize</strong>
          </td>
          <td>
            <div className="btn btn-low">285.765</div>
          </td>
          <td>
            <div className="btn btn-low">285.982</div>
          </td>
          <td>284.002</td>
          <td>286.201</td>
        </tr>
        <tr>
          <td>
            <strong>Wheat</strong>
          </td>
          <td>
            <div className="btn btn-low">400.574</div>
          </td>
          <td>
            <div className="btn btn-same">400.723</div>
          </td>
          <td>400.390</td>
          <td>400.883</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Prices;
