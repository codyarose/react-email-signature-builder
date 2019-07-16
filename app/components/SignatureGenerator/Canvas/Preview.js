import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../Contexts/StateContext'
import { TemplateOne } from '../../Templates/Template-1'
import { TemplateTwo } from '../../Templates/Template-2'
import { InputTextArea } from '../../Common/InputTextArea'

export const Preview = () => {
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
		<Fragment>
			<StyledPreview>{currentTemplate()}</StyledPreview>
			<InputTextArea>{currentTemplate()}</InputTextArea>
		</Fragment>
	)
}

const StyledPreview = styled.article`
	padding: 1rem;
	grid-area: signature;
	display: flex;
	justify-content: center;
	align-items: center;
`
