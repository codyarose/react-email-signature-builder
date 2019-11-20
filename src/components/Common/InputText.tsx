import React, { FormEvent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export interface InputTextProps {
	value: string,
	onBlur: (e: FormEvent) => void,
	name: string,
	label: string,
}

export const InputText = ({ value, onBlur, name, label }: InputTextProps) => (
	<StyledInputText>
		<Input
			type="text"
			required
			defaultValue={value}
			onBlur={onBlur}
			name={name}
			key={name}
		/>
		<Label htmlFor={name}>{label}</Label>
	</StyledInputText>
)

InputText.propTypes = {
	value: PropTypes.string,
	onBlur: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

const StyledInputText = styled.div`
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
	color: #e8e8e8;
	border: none;
	border-bottom: 2px solid #e8e8e8;
	box-shadow: none;
	&:focus {
		outline: none;
	}
	&:focus {
		outline: none;
	}
	&:focus + label,
	&:valid + label {
		top: -0.75rem;
		transform: scale(0.8);
		left: 0;
	}
`

const Label = styled.label`
	position: absolute;
	top: 1rem;
	left: 0.5rem;
	transition: all 0.2s ease-in-out;
	pointer-events: none;
	opacity: 0.5;
`
