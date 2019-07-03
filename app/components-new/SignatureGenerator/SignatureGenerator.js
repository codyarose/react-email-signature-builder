import React from 'react'
import Controls from './Controls/Controls'
import styled from 'styled-components'

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
			</StyledMainContainer>
		)
	}
}
