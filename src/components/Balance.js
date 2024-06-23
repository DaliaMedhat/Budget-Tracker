import React from "react";

const Balance = ({ balance }) => (
  <div className="balance-container">
    <h2 className="balance">Balance: {balance.toFixed(2)} €</h2>
  </div>
);

export default Balance;
