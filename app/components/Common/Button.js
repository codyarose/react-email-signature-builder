import React from 'react'
import styled from 'styled-components'

const Button = props => {
	return(
		<StyledButton onClick={ props.onClick }>
			{ props.children }
		</StyledButton>
	)
}

export default Button

const StyledButton = styled.button`
	outline: none;
	border: none;
	background-color: #504A65;
	color: #fff;
	font-family: inherit;
	padding: .5rem 1rem;
	cursor: pointer;
	transition: background-color .1s ease-out;
	&:hover {
		background-color: #696284;
	}
	&:active {
		background-color: #504A65;
	}
`
