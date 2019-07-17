import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useInfoValue } from '../../Contexts/InfoContext'
import { ColorPicker } from '../../Common/ColorPicker'

export const Styles = () => {
	const { updateAccentColor, updateSocialColor, data } = useInfoValue()
	return (
		<StyledStylesContainer>
			<ColorPicker
				title="Accent Color"
				onChange={updateAccentColor}
				currentColor={data.accentColor}
			/>
			<ColorPicker
				title="Social Icons Color"
				onChange={updateSocialColor}
				currentColor={data.socialColor ? data.socialColor : data.accentColor}
			/>
		</StyledStylesContainer>
	)
}

const StyledStylesContainer = styled.form`
	animation: flipdown 0.2s ease both;
`
