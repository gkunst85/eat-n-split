import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ name, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByUser : -paidByFriend);
  }

  function handleSetBill({ target }) {
    setBill(Number(target.value));
  }

  function handleSetPaidByUser({ target }) {
    setPaidByUser(Number(target.value));
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>

      <label>💰Bill value</label>
      <input type="number" value={bill} onChange={handleSetBill} />

      <label>🧍Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={handleSetPaidByUser}
        max={bill}
      />

      <label>🧍{name}'s expense</label>
      <input type="text" value={paidByFriend} disabled />

      <label>🤑Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={({ target }) => setWhoIsPaying(target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{name}</option>
      </select>

      <Button>Add</Button>
    </form>
  );
}
