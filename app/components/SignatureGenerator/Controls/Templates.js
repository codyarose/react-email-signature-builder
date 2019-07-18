import React from 'react'
import InputRadio from '../../Common/InputRadio'

const Templates = props => {
	return(
		<form>
			<InputRadio
				label="Template 1"
				name="template1"
				checked={ props.checked }
				onChange={ props.onChange }
				id="template1"
			/>
			<InputRadio
				label="Template 2"
				name="template2"
				checked={ props.checked }
				onChange={ props.onChange }
				id="template2"
			/>
		</form>
	)
}

export default Templates
