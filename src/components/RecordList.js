import React from "react";

const RecordList = ({
  records,
  handleDeleteRecord,
  isVisible,
  setIsVisible,
}) => (
  <div className="records-list-container">
    <div className="records-list">
      Records List:
      {!isVisible && (
        <a href="#" className=" plus-icon" onClick={() => setIsVisible(true)}>
          +
        </a>
      )}
    </div>
    {records.length < 1 && <p className="no-records-yet ">No records yet</p>}
    <ul>
      {records.map((record, index) => (
        <li key={index} className="records-list-item">
          <span style={{ width: "100px" }}>{record.description}</span>
          <span>
            {record.type === "expense" ? "-" : ""}
            {record.amount.toFixed(2)}€
          </span>
          <button
            onClick={() => handleDeleteRecord(index)}
            className="delete-record-button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default RecordList;
