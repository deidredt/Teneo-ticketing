
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({ client: "", summary: "" });

  const addTicket = () => {
    if (!form.client || !form.summary) return;
    const newTicket = {
      id: "TE-" + String(tickets.length + 1).padStart(4, "0"),
      client: form.client,
      summary: form.summary,
      date: new Date().toISOString()
    };
    setTickets([...tickets, newTicket]);
    setForm({ client: "", summary: "" });
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Teneo Education — Technician Ticketing</h1>

      <div style={{ marginTop: 20 }}>
        <input
          placeholder="Client name"
          value={form.client}
          onChange={(e) => setForm({ ...form, client: e.target.value })}
        />
        <input
          placeholder="Issue summary"
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
        />
        <button onClick={addTicket}>Add Ticket</button>
      </div>

      <ul style={{ marginTop: 20 }}>
        {tickets.map((t) => (
          <li key={t.id}>
            <strong>{t.id}</strong> — {t.client}: {t.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
