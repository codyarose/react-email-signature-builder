import React, { useState, FormEvent } from 'react'
import { ChromePicker } from 'react-color'
import styled from 'styled-components'

export interface ColorPickerProps {
	title: string,
	onChange: (e: FormEvent) => void,
	currentColor: string,
}

export interface ColorProps {
	setColor: string,
}

export interface PopoverProps {
	show: boolean,
}

export const ColorPicker = ({ title, onChange, currentColor }: ColorPickerProps) => {
	const [displayColorPicker, setDisplayColorPicker] = useState(false)
	const handleClick = () => setDisplayColorPicker(!displayColorPicker)
	const handleClose = () => setDisplayColorPicker(false)
	const handleChange = (color: any) => onChange(color.hex)

	return (
		<StyledColorPicker>
			{title && <label htmlFor={title}>{title}</label>}
			<Swatch onClick={handleClick}>
				<Color setColor={currentColor}>
					{displayColorPicker && 'close'}
				</Color>
			</Swatch>
			<Popover show={displayColorPicker}>
				<Cover onClick={handleClose} />
				<ChromePicker color={currentColor} onChange={handleChange} />
			</Popover>
		</StyledColorPicker>
	)
}

const StyledColorPicker = styled.div`
	position: relative;
	margin-bottom: 1rem;
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
const Color = styled.div<ColorProps>`
	pointer-events: none;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.75rem;
	width: 100%;
	height: 2rem;
	border-radius: 2px;
	background: ${props => props.setColor};
`
const Popover = styled.div<PopoverProps>`
	padding: 0.5rem 0;
	z-index: 2;
	opacity: ${props => (props.show ? '1' : '0')};
	visibility: ${props => (props.show ? 'visible' : 'hidden')};
	transition: all 0.2s ease-in-out;
	max-height: 0;
	${props => props.show && `
		max-height: 1000px;
	`}
`
const Cover = styled.div`
	position: fixed;
	z-index: 2;
`
