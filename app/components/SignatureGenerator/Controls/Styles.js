import React, { Fragment } from 'react'
import { useInfoValue } from '../../Contexts/InfoContext'
import ColorPicker from '../../Common/ColorPicker'

export const Styles = () => {
	const { updateColor, data } = useInfoValue()
	return (
		<Fragment>
			<ColorPicker
				title="Accent Color"
				onChange={updateColor}
				accentColor={data.accentColor}
			/>
		</Fragment>
	)
}
