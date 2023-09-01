import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="/">
					{props.title}
				</a>
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