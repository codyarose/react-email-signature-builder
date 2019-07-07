import React from 'react'
import styled from 'styled-components'
import Controls from './Controls/Controls'
import Canvas from './Canvas/Canvas'
import TemplateOne from '../Templates/Template-1'

export default class SignatureGenerator extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const StyledMainContainer = styled.main`
			width: 100%;
			height: 100vh;
			background-color: #fff;
			margin: 0 auto;
			display: grid;
			grid-template-columns: minmax(200px,400px) 3fr;
			grid-template-rows: 1fr 1fr;
			grid-gap: 1vw;
			grid-template-areas:
				'form signature'
				'form copy-signature';
		`

		return(
			<StyledMainContainer>
				<Controls />
				<Canvas>
					<TemplateOne />
				</Canvas>
			</StyledMainContainer>
		)
	}
}
