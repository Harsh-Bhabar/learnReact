import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({ taskKey, task, onDelete }) {
	return (
		<div className="task">
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
