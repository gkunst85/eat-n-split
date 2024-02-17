import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const friend = {
      id,
      balance: 0,
      name,
      image: `${image}?=${id}`,
    };

    onAddFriend(friend);

    resetForm();
  }

  function resetForm() {
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧍Friend name</label>
      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <label>🖼️Image url</label>
      <input
        type="text"
        value={image}
        onChange={({ target }) => setImage(target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
