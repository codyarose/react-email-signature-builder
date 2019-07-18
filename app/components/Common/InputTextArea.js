import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import styled from 'styled-components'

const InputTextArea = props => {
	return(
		<textarea
			id={ props.id }
			cols="40" rows="10"
			readOnly
			value={ renderToStaticMarkup(props.children) }
		>
		</textarea>
	)
}

export default InputTextArea

const StyledInputTextArea = styled.textarea`
	width: 80%;
	max-width: 500px;
`
