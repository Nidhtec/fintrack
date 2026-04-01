import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function SummaryChart({ transactions }) {
  const income = transactions.filter(t => t.type === "income").reduce((s, t) => s + Number(t.amount), 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((s, t) => s + Number(t.amount), 0);
  const balance = income - expense;

  const data = {
    labels: ["Income", "Expenses"],
    datasets: [{ data: [income, expense], backgroundColor: ["#22c55e", "#ef4444"], borderWidth: 0 }]
  };

  return (
    <div style={styles.card}>
      <h3 style={{marginTop:0}}>Summary</h3>
      <div style={styles.stats}>
        <div style={styles.stat}><span style={styles.label}>Balance</span><span style={{...styles.val, color: balance >= 0 ? "#22c55e" : "#ef4444"}}>₹{balance.toLocaleString()}</span></div>
        <div style={styles.stat}><span style={styles.label}>Income</span><span style={{...styles.val, color:"#22c55e"}}>₹{income.toLocaleString()}</span></div>
        <div style={styles.stat}><span style={styles.label}>Expenses</span><span style={{...styles.val, color:"#ef4444"}}>₹{expense.toLocaleString()}</span></div>
      </div>
      {(income > 0 || expense > 0) && <div style={{maxWidth:220, margin:"0 auto"}}><Doughnut data={data} /></div>}
    </div>
  );
}

const styles = {
  card: { background:"white", padding:24, borderRadius:12, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", marginBottom:24 },
  stats: { display:"flex", justifyContent:"space-around", marginBottom:20 },
  stat: { display:"flex", flexDirection:"column", alignItems:"center" },
  label: { fontSize:13, color:"#888", marginBottom:4 },
  val: { fontSize:20, fontWeight:700 }
};