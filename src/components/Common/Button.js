import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Button = ({ onClick, children }) => (
	<StyledButton onClick={onClick}>{children}</StyledButton>
)

export const ButtonSecondary = ({ onClick, children }) => (
	<StyledButton secondary onClick={onClick}>
		{children}
	</StyledButton>
)

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.string,
}
ButtonSecondary.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.string,
}

const StyledButton = styled.button`
	outline: none;
	border: 1px solid transparent;
	background-color: ${props => (props.secondary ? '#fff' : '#504a65')};
	color: ${props => (props.secondary ? '#504a65' : '#fff')};
	font-family: inherit;
	padding: 0.5rem 1rem;
	margin-bottom: 1rem;
	cursor: pointer;
	transition: color 0.1s ease-out, border-color 0.1s ease-out,
		background-color 0.1s ease-out;
	&:hover {
		background-color: #696284;
		${props => (props.secondary ? 'color: #fff' : null)}
	}
	&:active {
		background-color: #504a65;
	}
`
