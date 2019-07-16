import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../Contexts/StateContext'
import { InputTextArea } from '../../Common/InputTextArea'
import { Button } from '../../Common/Button'
import { TemplateOne } from '../../Templates/Template-1'
import { TemplateTwo } from '../../Templates/Template-2'

export const Output = () => {
	const [{ template }] = useStateValue()

	const currentTemplate = () => {
		switch (template) {
			case 'template1':
				return <TemplateOne />
			case 'template2':
				return <TemplateTwo />
			default:
				return <TemplateOne />
		}
	}

	return (
		<StyledOutput>
			<InputTextArea id="signatureMarkup">{currentTemplate()}</InputTextArea>
		</StyledOutput>
	)
}

const StyledOutput = styled.article`
	padding: 1rem;
	grid-area: copy-signature;
	display: flex;
	flex-direction: column;
	align-items: center;

	textarea {
		margin-bottom: 1rem;
	}
`
