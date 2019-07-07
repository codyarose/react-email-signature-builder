import React from 'react'
import styled from 'styled-components'

const Output = props => {
	const StyledOutput = styled.article`
		padding: 1rem;
		grid-area: copy-signature;
		display: flex;
		flex-direction: column;
		align-items: center;
	`

	return(
		<StyledOutput>
			Output.js
			{ props.children }
		</StyledOutput>
	)
}

export default Output
