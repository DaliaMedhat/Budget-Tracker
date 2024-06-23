import React from "react";

const amountCheck = (amount, description) => {
  if (amount && amount !== "" && description && description !== "") {
    if (amount > 0) {
      return true;
    } else {
      alert("Amount must be greater than 0");
      return false;
    }
  } else {
    alert("Please fill in the description and amount");
    return false;
  }
};

const RecordForm = ({
  description,
  setDescription,
  amount,
  setAmount,
  handleAddRecord,
  type,
  setType,
}) => (
  <div className="record-form-container">
    <input
      type="text"
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="input-container"
    />
    <input
      type="number"
      placeholder="Amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="input-container"
    />
    <select
      value={type}
      onChange={(e) => setType(e.target.value)}
      className="input-container"
    >
      <option value="expense">Expense</option>
      <option value="income">Income</option>
    </select>
    <button
      onClick={() =>
        amountCheck(amount, description) ? handleAddRecord() : ""
      }
      className="add-record-button"
    >
      Add Record
    </button>
  </div>
);

export default RecordForm;
