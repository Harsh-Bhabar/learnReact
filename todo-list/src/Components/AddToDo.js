import React from "react";
import { useState } from "react";

export default function AddToDo({ addInTodoList }) {

	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const submitForm = (e) => {
		e.preventDefault();
		if(!title || !desc ){
			alert("Fill both the details pls");
		}else{
			addInTodoList(title, desc);
			setDesc("");
			setTitle("");
		}
	}

	return (
		<div className="container my-3">
			<h3>Add a todo - </h3>
			<form onSubmit={submitForm}>
				<div className="form-group">
					<label htmlFor="totoTitle">Title</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value) }
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter title"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="todoDesc">Desc</label>
					<input
						type="text"
						value={desc}
						onChange={(e) => setDesc(e.target.value) }
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Description"
					/>
				</div>

				<button type="submit" className="btn btn-success btn-sm">
					Submit
				</button>
			</form>
		</div>
	);
}
