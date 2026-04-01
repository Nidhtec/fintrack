import { useState } from "react";
import axios from "../api/axios";

const CATEGORIES = ["Food", "Rent", "Salary", "Transport", "Shopping", "Entertainment", "Health", "Other"];

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", amount: "", type: "expense", category: "Food", date: new Date().toISOString().split("T")[0] });

  const handleSubmit = async () => {
    if (!form.title || !form.amount) return alert("Fill all fields");
    try {
      const res = await axios.post("/transactions", form);
      onAdd(res.data);
      setForm({ title: "", amount: "", type: "expense", category: "Food", date: new Date().toISOString().split("T")[0] });
    } catch (err) {
      alert("Error adding transaction");
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={{marginTop:0}}>Add Transaction</h3>
      <input style={styles.input} placeholder="Title (e.g. Grocery)" value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })} />
      <input style={styles.input} type="number" placeholder="Amount (₹)" value={form.amount}
        onChange={e => setForm({ ...form, amount: e.target.value })} />
      <div style={styles.row}>
        <select style={styles.select} value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select style={styles.select} value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
        <input style={styles.select} type="date" value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })} />
      </div>
      <button style={styles.btn} onClick={handleSubmit}>+ Add</button>
    </div>
  );
}

const styles = {
  card: { background:"white", padding:24, borderRadius:12, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", marginBottom:24 },
  input: { width:"100%", padding:"10px 12px", marginBottom:12, borderRadius:8, border:"1px solid #ddd", fontSize:15, boxSizing:"border-box" },
  row: { display:"flex", gap:10, marginBottom:12 },
  select: { flex:1, padding:"10px 8px", borderRadius:8, border:"1px solid #ddd", fontSize:14 },
  btn: { width:"100%", padding:12, background:"#6366f1", color:"white", border:"none", borderRadius:8, fontSize:15, cursor:"pointer" }
};