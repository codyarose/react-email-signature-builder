import React from 'react'
import styled from 'styled-components'
import { StateProvider } from '../Contexts/StateContext'
import { InfoProvider } from '../Contexts/InfoContext'
import { CollectionProvider } from '../Contexts/CollectionContext'
import { Controls } from './Controls/Controls'
import { Canvas } from './Canvas/Canvas'

const SignatureGenerator = () => {
	const initialState = {
		control: 'templates',
		template: 'template1',
	}
	const reducer = (state, action) => {
		switch (action.type) {
			case 'changeControl':
				return {
					...state,
					control: action.newControl,
				}
			case 'changeTemplate':
				return {
					...state,
					template: action.newTemplate,
				}
			default:
				return state
		}
	}

	return (
		<StyledMainContainer>
			<StateProvider initialState={initialState} reducer={reducer}>
				<InfoProvider>
					<CollectionProvider>
						<Controls />
						<Canvas />
					</CollectionProvider>
				</InfoProvider>
			</StateProvider>
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

export { SignatureGenerator }
