import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="stat-item">2500 Welcome</div>
        <div className="stat-item">123.50 Average Time</div>
        <div className="stat-item">1,805 Collections</div>
        <div className="stat-item">54 Comments</div>
      </div>
      <div className="charts">
        <h3>Extra Area Chart</h3>
        <img src="https://via.placeholder.com/600x200" alt="Chart" />
      </div>
    </div>
  );
}

export default Dashboard;
