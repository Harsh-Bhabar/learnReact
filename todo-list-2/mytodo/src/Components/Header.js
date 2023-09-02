import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function Header(props) {

  return (
	<div className='header'>
		  <h1>{props.title}</h1>
		  <Button text={props.showAdd ? "Close" : "Add"} color={props.showAdd ? "red" : "green"} onClickFunc={props.onAdd}/>
	</div>
  )
}

Header.defaultProps = {
	title : "My Todo App"
}

Header.propTypes = {
	title : PropTypes.string
}