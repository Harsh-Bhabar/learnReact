import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({ task, onDelete, onToggle }) {
	return (
		<div className={`task ${task.reminder ? `reminderTrue` : ``}`} onDoubleClick={() => onToggle(task.id)}>
			<div>
				<h4>{task.name}</h4>
				<p>{task.desc}</p>
			</div>
			<div className="timesIcon" onClick={() => onDelete(task.id)}>
				<FaTimes />
			</div>
		</div>
	);
}
