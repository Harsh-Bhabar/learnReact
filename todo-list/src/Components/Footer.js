import React from 'react'
import PropType from 'prop-types'

export default function Footer(props) {

	let FooterStyles = {
		position: "relative",
		top: "10vh",
		width: "100%"
	}

  return (
	<div className="bg-dark text-center py-3 text-white" style={FooterStyles}>
		  {props.footerTitle}
	</div>
  )
}

Footer.defaultProps = {
	footerTitle : "myTodoList.com"
}

Footer.prototype = {
	footerTitle : PropType.string
}