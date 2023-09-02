import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
	e.preventDefault();
	if(!name || !desc){
		alert("Please add task!");
		return;
	}
	
	onAddTask({name, desc, reminder});
	setName("");
	setDesc("")
	setReminder(false);

  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Add name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          placeholder="Add Desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className="form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
			checked = {reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

		<input type="submit" className="btn" value="Add Task"></input>
		
      </div>
    </form>
  );
}
