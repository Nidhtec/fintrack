import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>💰 FinTrack</h2>
      <div style={styles.right}>
        <span style={styles.name}>Hey, {user?.name} 👋</span>
        <button style={styles.btn} onClick={() => { logout(); navigate("/login"); }}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display:"flex", justifyContent:"space-between", alignItems:"center", padding:"16px 32px", background:"#6366f1", color:"white" },
  logo: { margin:0, fontSize:22 },
  right: { display:"flex", alignItems:"center", gap:16 },
  name: { fontSize:15 },
  btn: { padding:"8px 18px", background:"white", color:"#6366f1", border:"none", borderRadius:8, cursor:"pointer", fontWeight:600 }
};