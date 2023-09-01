import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Header(props) {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<Link className="navbar-brand" to="/">
					{props.title}
				</Link>
				{
					props.searchBar ?
						<form className="form-inline">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								className="btn btn-outline-success my-2 my-sm-0"
								type="submit"
							>
								Search
							</button>
							<Link className='mx-5' to="/about">About</Link>
						</form> : ""
				}
			</nav>
		</div>
	);
}

Header.defaultProps = {
	title : "My Todo List",
	searchBar: true
}

Header.prototype = {
	title: PropTypes.string.isRequired,
	searchBar: PropTypes.bool
}