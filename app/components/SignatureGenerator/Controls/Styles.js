import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useInfoValue } from '../../Contexts/InfoContext'
import ColorPicker from '../../Common/ColorPicker'

export const Styles = () => {
	const { updateColor, data } = useInfoValue()
	return (
		<StyledStylesContainer>
			<ColorPicker
				title="Accent Color"
				onChange={updateColor}
				accentColor={data.accentColor}
			/>
		</StyledStylesContainer>
	)
}

const StyledStylesContainer = styled.div`
	animation: flipdown 0.2s ease both;
`
