import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ColorPicker = ({ title, onChange, currentColor }) => {
	const [displayColorPicker, setDisplayColorPicker] = useState(false)
	const handleClick = () => setDisplayColorPicker(!displayColorPicker)
	const handleClose = () => setDisplayColorPicker(false)
	const handleChange = color => onChange(color.hex)

	return (
		<StyledColorPicker>
			{title && <label htmlFor={title}>{title}</label>}
			<Swatch onClick={handleClick}>
				<Color setColor={currentColor} />
			</Swatch>
			<Popover show={displayColorPicker}>
				<Cover onClick={handleClose} />
				<ChromePicker color={currentColor} onChange={handleChange} />
			</Popover>
		</StyledColorPicker>
	)
}

ColorPicker.propTypes = {
	title: PropTypes.string,
	onChange: PropTypes.func,
	currentColor: PropTypes.string,
}

const StyledColorPicker = styled.div`
	position: relative;
	margin-bottom: 2rem;
`
const Swatch = styled.div`
	width: 100%;
	max-width: 5rem;
	padding: 5px;
	margin-top: 1rem;
	background: #fff;
	border-radius: 1px;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
	cursor: pointer;
`
const Color = styled.div`
	width: 100%;
	height: 2rem;
	border-radius: 2px;
	background: ${props => props.setColor};
`
const Popover = styled.div`
	position: absolute;
	top: calc(100% + 0.75rem);
	left: 0;
	padding: 5px;
	background-color: #fff;
	z-index: 2;
	opacity: ${props => (props.show ? '1' : '0')};
	visibility: ${props => (props.show ? 'visible' : 'hidden')};
	transition: opacity 0.1s ease-out;
	&::before {
		content: '';
		position: absolute;
		top: -0.25rem;
		left: 1rem;
		width: 1rem;
		height: 1rem;
		background-color: #fff;
		transform: rotate(45deg);
		z-index: -1;
	}
`
const Cover = styled.div`
	position: fixed;
	z-index: 2;
`
