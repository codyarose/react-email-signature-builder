import React from 'react'
import styled from 'styled-components'
import InputTextArea from '../../Common/InputTextArea'
import Button from '../../Common/Button'

const Output = ({ children, onCopy, copySuccess }) => {
	return(
		<StyledOutput>
			<InputTextArea id="signatureMarkup">
				{ children }
			</InputTextArea>
			<Button onClick={ onCopy }>copy me</Button>
			<span>{ copySuccess }</span>
		</StyledOutput>
	)
}

export default Output

const StyledOutput = styled.article`
	padding: 1rem;
	grid-area: copy-signature;
	display: flex;
	flex-direction: column;
	align-items: center;

	textarea {
		margin-bottom: 1rem;
	}
`
