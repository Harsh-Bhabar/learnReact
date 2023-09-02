import React from "react";
import Task from "./Task";
import NoTasks from "./NoTasks";

export default function Tasks({ tasks, onDelete, onToggle}) {
	return (
		<div className="tasks">
			{
				tasks.length !== 0 ?
					(
						tasks.map((task) => (
							<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />)
						)
					)
					:
					(
						<NoTasks />
					)
			}
		</div>
	);
}
