import { useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", form);
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>💰 FinTrack</h2>
        <p style={styles.sub}>Create your account</p>
        <input style={styles.input} placeholder="Full Name" value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input style={styles.input} placeholder="Email" value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <input style={styles.input} type="password" placeholder="Password" value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <button style={styles.btn} onClick={(e) => handleSubmit(e)}>Register</button>
        <p style={{textAlign:"center", marginTop:12}}>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#f0f4f8" },
  card: { background:"white", padding:40, borderRadius:16, width:360, boxShadow:"0 4px 24px rgba(0,0,0,0.1)" },
  title: { textAlign:"center", fontSize:28, marginBottom:4 },
  sub: { textAlign:"center", color:"#666", marginBottom:24 },
  input: { width:"100%", padding:"12px 14px", marginBottom:14, borderRadius:8, border:"1px solid #ddd", fontSize:15, boxSizing:"border-box" },
  btn: { width:"100%", padding:13, background:"#6366f1", color:"white", border:"none", borderRadius:8, fontSize:16, cursor:"pointer" }
};