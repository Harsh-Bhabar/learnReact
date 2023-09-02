import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function Header(props) {


	const addBtnClickFunc = () => {
		console.log("btn click");
	}

  return (
	<div className='header'>
		  <h1>{props.title}</h1>
		  <Button text="Add" color="green" onClickFunc={addBtnClickFunc}/>
	</div>
  )
}

Header.defaultProps = {
	title : "My Todo App"
}

Header.propTypes = {
	title : PropTypes.string
}