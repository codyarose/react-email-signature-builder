import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../Contexts/StateContext'
import { InputRadio } from '../../Common/InputRadio'

export const Templates = () => {
	const [{ template }, dispatch] = useStateValue()
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
		<StyledForm>
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
		</StyledForm>
	)
}

const StyledForm = styled.form`
	animation: flipdown 0.2s ease both;
`
