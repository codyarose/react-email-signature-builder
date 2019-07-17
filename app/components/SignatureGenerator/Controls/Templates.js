import React from 'react'
import { useStateValue } from '../../Contexts/StateContext'
import InputRadio from '../../Common/InputRadio'

export const Templates = () => {
	const [{ template }, dispatch] = useStateValue()
	// const templateType = ['Template One', 'Template Two']
	const templateTypes = [
		{
			label: 'Template One',
			name: 'template1'
		},
		{
			label: 'Template Two',
			name: 'template2'
		},
	]

	return (
		<form>
			{templateTypes.map(templateType => (
				<InputRadio
					label={templateType.label}
					name={templateType.name}
					checked={template}
					onChange={e =>
						dispatch({
							type: 'changeTemplate',
							newTemplate: e.target.value,
						})
					}
					key={templateType.name}
				/>
			))}
		</form>
	)
}
