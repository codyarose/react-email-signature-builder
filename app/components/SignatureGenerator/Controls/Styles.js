import React from 'react'
import ColorPicker from '../../Common/ColorPicker'

const Styles = props => {
	return(
		<React.Fragment>
			<ColorPicker
				title="Accent Color"
				onColorPickerChange={ props.onColorPickerChange}
				accentColor={ props.accentColor }
			/>
		</React.Fragment>
	)
}

export default Styles
