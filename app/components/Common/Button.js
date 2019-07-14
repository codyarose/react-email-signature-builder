import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Button = ({ onClick, children }) => (
	<StyledButton onClick={onClick}>{children}</StyledButton>
)

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.string,
}

const StyledButton = styled.button`
	outline: none;
	border: none;
	background-color: #504a65;
	color: #fff;
	font-family: inherit;
	padding: 0.5rem 1rem;
	margin-bottom: 1rem;
	cursor: pointer;
	transition: background-color 0.1s ease-out;
	&:hover {
		background-color: #696284;
	}
	&:active {
		background-color: #504a65;
	}
`
