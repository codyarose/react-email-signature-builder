import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextInput = props => {
	return (
		<StyledTextInput>
			<Input
				type={ props.type ? props.type : 'text'}
				required
				defaultValue={ props.value }
				onBlur={ props.onBlur }
				name={ props.name }
			/>
			<Label htmlFor={ props.name }>
				{ props.label }
			</Label>
		</StyledTextInput>
	)
}

export default TextInput

const StyledTextInput = styled.div`
	position: relative;
`

const Input = styled.input`
	width: 100%;
	font-family: 'Roboto Mono', monospace;
	height: 30px;
	padding: 0.5rem 0 0.5rem 0.5rem;
	margin-bottom: 3rem;
	font-size: 1.25rem;
	background: transparent;
	color: #E8E8E8;
	border: none;
	border-bottom: 2px solid #E8E8E8;
	box-shadow: none;
	&:focus {
		outline: none;
	}
	&:focus {
		outline: none;
	}
	&:focus + label,
	&:valid + label {
		top: -.75rem;
		transform: scale(.8);
		left: 0;
	}
`

const Label = styled.label`
	position: absolute;
	top: 1rem;
	left: 0.5rem;
	transition: all .2s ease-in-out;
	pointer-events: none;
	opacity: .5;
`

TextInput.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	onBlur: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}
