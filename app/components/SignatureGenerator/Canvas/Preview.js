import React from 'react'
import styled from 'styled-components'

const Preview = props => {
	return(
		<StyledPreview>
			{ props.children }
		</StyledPreview>
	)
}

export default Preview

const StyledPreview = styled.article`
	padding: 1rem;
	grid-area: signature;
	display: flex;
	justify-content: center;
	align-items: center;
`
