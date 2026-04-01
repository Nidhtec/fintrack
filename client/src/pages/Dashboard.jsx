import { useState, useEffect } from "react";
import axios from "../api/axios";
import Navbar from "../components/Navbar";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import SummaryChart from "../components/SummaryChart";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("/transactions").then(res => setTransactions(res.data));
  }, []);

  const handleAdd = (t) => setTransactions([t, ...transactions]);
  const handleDelete = (id) => setTransactions(transactions.filter(t => t.id !== id));

  return (
    <div style={{ minHeight:"100vh", background:"#f0f4f8" }}>
      <Navbar />
      <div style={{ maxWidth:800, margin:"32px auto", padding:"0 16px" }}>
        <SummaryChart transactions={transactions} />
        <TransactionForm onAdd={handleAdd} />
        <TransactionList transactions={transactions} onDelete={handleDelete} />
      </div>
    </div>
  );
}