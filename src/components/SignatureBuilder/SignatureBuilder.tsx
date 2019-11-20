import React from 'react'
import styled from 'styled-components'
import { ControlProvider } from '../Contexts/ControlContext'
import { InfoProvider } from '../Contexts/InfoContext'
import { Controls } from './Controls/Controls'
import { Canvas } from './Canvas/Canvas'

const SignatureBuilder = () => {
	return (
		<StyledMainContainer>
			<InfoProvider>
				<ControlProvider>
					<Controls />
					<Canvas />
				</ControlProvider>
			</InfoProvider>
		</StyledMainContainer>
	)
}

const StyledMainContainer = styled.main`
	width: 100%;
	height: 100vh;
	background-color: #fff;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 415px 3fr;
	grid-template-rows: 1fr;
	grid-template-areas:
		'form canvas'
`

export { SignatureBuilder }
