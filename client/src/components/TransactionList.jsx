import axios from "../api/axios";

export default function TransactionList({ transactions, onDelete }) {
  const handleDelete = async (id) => {
    await axios.delete(`/transactions/${id}`);
    onDelete(id);
  };

  return (
    <div style={styles.card}>
      <h3 style={{marginTop:0}}>Transactions</h3>
      {transactions.length === 0 && <p style={{color:"#999"}}>No transactions yet. Add one above!</p>}
      {transactions.map(t => (
        <div key={t.id} style={styles.item}>
          <div>
            <strong>{t.title}</strong>
            <span style={styles.cat}>{t.category}</span>
            <div style={{fontSize:12, color:"#999"}}>{t.date?.slice(0,10)}</div>
          </div>
          <div style={styles.right}>
            <span style={{ color: t.type === "income" ? "#22c55e" : "#ef4444", fontWeight:700, fontSize:17 }}>
              {t.type === "income" ? "+" : "-"}₹{Number(t.amount).toLocaleString()}
            </span>
            <button style={styles.del} onClick={() => handleDelete(t.id)}>🗑</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: { background:"white", padding:24, borderRadius:12, boxShadow:"0 2px 12px rgba(0,0,0,0.07)" },
  item: { display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:"1px solid #f0f0f0" },
  cat: { marginLeft:8, fontSize:12, background:"#f0f0f0", padding:"2px 8px", borderRadius:20 },
  right: { display:"flex", alignItems:"center", gap:12 },
  del: { background:"none", border:"none", cursor:"pointer", fontSize:18 }
};