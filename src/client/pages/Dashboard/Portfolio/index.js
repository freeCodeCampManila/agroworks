import React from "react";

const Portfolio = () => (
  <div className="o-box-container portfolio-wrapper">
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Portfolio;
