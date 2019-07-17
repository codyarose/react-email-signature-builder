import React from 'react'
import styled from 'styled-components'
import { Button } from '../../Common/Button'
import { copyToClipboard } from '../../Common/CopyToClipboard'

export const Output = () => {
	return (
		<StyledOutput>
			<Button onClick={() => copyToClipboard('signatureMarkup')}>
				Copy HTML
			</Button>
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
