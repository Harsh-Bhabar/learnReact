import React from 'react'

export default function CheckBoxesLine(props) {
  return (
	<div className='checkboxes'>

		  <input
		  className='checkboxesGap'
			  type="checkbox"
			  name="checkbox1"
		  />
			  <label>
				{props.statement}
			  </label>	  	
	</div>
  )
}
