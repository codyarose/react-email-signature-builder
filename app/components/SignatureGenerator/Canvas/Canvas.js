import React from 'react'
import styled from 'styled-components'
import { Preview } from './Preview'

export const Canvas = () => (
	<StyledCanvas>
		<Preview />
	</StyledCanvas>
)

const StyledCanvas = styled.article`
	padding: 1rem;
	grid-area: canvas;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
