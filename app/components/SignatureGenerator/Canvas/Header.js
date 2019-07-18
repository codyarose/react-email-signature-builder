import React from 'react'
import styled from 'styled-components'

export const Header = () => {
	return(
		<StyledHeader>
			<h1>React Signature Generator</h1>
			<p>Use the panel on the left to customize your signature, then click the button below to copy the HTML</p>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	margin-bottom: 8rem;
	text-align: center;
	font-size: 14px;
	h1 {
		font-size: 45px;
		margin: 1rem 0 0;
	}
`
