import React from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { Preview } from './Preview'

export const Canvas = () => (
	<StyledCanvas>
		<Header />
		<Preview />
	</StyledCanvas>
)

const StyledCanvas = styled.article`
	padding: 1rem 3rem;
	grid-area: canvas;
	display: flex;
	flex-direction: column;
	align-items: center;
`
