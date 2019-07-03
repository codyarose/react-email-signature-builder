import React from 'react'
import InputRadio from '../../Common/InputRadio'

const Templates = props => {

	return(
		<form>
			<InputRadio
				label="Template 1"
				name="template1"
				onChange={ props.onChange }
			/>
			<InputRadio
				label="Template 2"
				name="template2"
				onChange={ props.onChange }
			/>
		</form>
	)
}

export default Templates
