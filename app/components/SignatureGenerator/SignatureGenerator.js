import React from 'react'
import styled from 'styled-components'
import { StateProvider } from '../Contexts/StateContext'
import { InfoProvider } from '../Contexts/InfoContext'
import { Controls } from './Controls/Controls'
import { Canvas } from './Canvas/Canvas'

const SignatureGenerator = () => {
	const initialState = {
		control: 'templates',
		template: 'template1',
		collection: [],
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
			case 'copyCollectionItem':
				return {
					...state,
					collection: action.copyItem,
				}
			default:
				return state
		}
	}

	return (
		<StyledMainContainer>
			<StateProvider initialState={initialState} reducer={reducer}>
				<InfoProvider>
					<Controls />
					<Canvas />
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
	grid-template-columns: auto 3fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 1vw;
	grid-template-areas:
		'form signature'
		'form copy-signature';
`

export { SignatureGenerator }
