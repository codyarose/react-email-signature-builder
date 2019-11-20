import React from 'react'
import styled from 'styled-components'
import { useInfoValue } from '../../Contexts/InfoContext'
import { ColorPicker } from '../../Common/ColorPicker'
import { Description } from '../../Common/Description'

export const Styles = () => {
	const { updateAccentColor, updateSocialColor, data } = useInfoValue()
	return (
		<StyledStylesContainer>
			<Description>Use the color pickers to match your branding</Description>
			<ColorPicker
				title="Accent Color"
				onChange={updateAccentColor}
				currentColor={data.accentColor}
			/>
			<ColorPicker
				title="Social Icons Color"
				onChange={updateSocialColor}
				currentColor={data.socialColor}
			/>
		</StyledStylesContainer>
	)
}

const StyledStylesContainer = styled.form`
	animation: flipdown 0.2s ease both;
`
