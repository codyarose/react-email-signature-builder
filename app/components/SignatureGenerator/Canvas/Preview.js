import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../Contexts/StateContext'
import { Button } from '../../Common/Button'
import { TemplateOne } from '../../Templates/Template-1'
import { TemplateTwo } from '../../Templates/Template-2'
import { copyToClipboard } from '../../Common/CopyToClipboard'

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
			<StyledPreview id="signatureMarkup">{currentTemplate()}</StyledPreview>
			<Button onClick={() => copyToClipboard('signatureMarkup')}>
				Copy HTML
			</Button>
		</Fragment>
	)
}

const StyledPreview = styled.article`
	margin-bottom: 3rem;
`
