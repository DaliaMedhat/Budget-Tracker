import React, { useState, useEffect } from "react";
import {
  Balance,
  RecordForm,
  RecordList,
  BackgroundBlush,
  PieChart,
} from "./components";
import "./styles.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [records, setRecords] = useState([]);
  const [balance, setBalance] = useState(0);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    localStorage.clear();
    const savedRecords = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(savedRecords);
    calculateBalance(savedRecords);
  }, []);

  const calculateBalance = (records) => {
    const balance = records.reduce(
      (acc, record) =>
        record.type === "income" ? acc + record.amount : acc - record.amount,
      0
    );
    setBalance(balance);
  };

  const handleAddRecord = () => {
    const newRecord = { description, amount: parseFloat(amount), type };
    const newRecords = [...records, newRecord];
    setRecords(newRecords);
    if (newRecord.type === "income") {
      setTotalIncome(totalIncome + newRecord.amount);
    } else {
      setTotalExpenses(totalExpenses + newRecord.amount);
    }
    calculateBalance(newRecords);
    localStorage.setItem("records", JSON.stringify(newRecords));

    setDescription("");
    setAmount("");
    setIsVisible(false);
  };

  const handleDeleteRecord = (index) => {
    if (records[index].type === "income") {
      setTotalIncome(totalIncome - records[index].amount);
    } else {
      setTotalExpenses(totalExpenses - records[index].amount);
    }
    const newRecords = records.filter((_, i) => i !== index);
    setRecords(newRecords);
    calculateBalance(newRecords);
    localStorage.setItem("records", JSON.stringify(newRecords));
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="text-center ">
          <img
            className="h-40"
            src="https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/finance-icon.png"
            alt=""
          />
          <h1 className="welcome-text">Hello there!</h1>
          <p className="normal-sized-text">
            Let's see an overview for your current balance, expenses and
            income!🎉
          </p>
          <Balance balance={balance} />
        </div>

        {isVisible && (
          <RecordForm
            description={description}
            setDescription={setDescription}
            amount={amount}
            setAmount={setAmount}
            handleAddRecord={handleAddRecord}
            type={type}
            setType={setType}
          />
        )}

        <RecordList
          records={records}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          handleDeleteRecord={handleDeleteRecord}
        />
        <BackgroundBlush />
        <div className="relative">
          <BackgroundBlush />
        </div>
      </div>
      <PieChart
        className="w-80"
        income={totalIncome}
        expenses={totalExpenses}
      />
    </div>
  );
};

export default App;
