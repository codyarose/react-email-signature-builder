import React from 'react'
import styled from 'styled-components'
import InputTextArea from '../../Common/InputTextArea'

const Output = ({ children }) => {
	return(
		<StyledOutput>
			<InputTextArea id="signatureMarkup">
				{ children }
			</InputTextArea>
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
`
