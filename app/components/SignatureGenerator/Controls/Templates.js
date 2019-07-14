import React from 'react'
import { useStateValue } from '../../Contexts/StateContext'
import InputRadio from '../../Common/InputRadio'

export const Templates = () => {
	const [{ template }, dispatch] = useStateValue()
	const templateType = ['template1', 'template2']

	return (
		<form>
			{templateType.map(templateName => (
				<InputRadio
					label={templateName}
					name={templateName}
					checked={template}
					onChange={e =>
						dispatch({
							type: 'changeTemplate',
							newTemplate: e.target.value,
						})
					}
					key={templateName}
				/>
			))}
		</form>
	)
}
