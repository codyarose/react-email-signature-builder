import React from 'react'
import styled from 'styled-components'
import InputText from '../../Common/InputText'
import Accordion from '../../Common/Accordion'
import inputsList from '../../Common/InputList'

const Info = props => {
	return(
		<StyledInfo>
			{ inputsList.default.map(input => {
				return(
					<InputText
						label={ input.label }
						name={ input.name }
						value={ props[input.name] }
						onBlur={ props.onInputChange }
						key={ input.name }
					/>
				)
			}) }
			<Accordion title="Contact Info">
				{ inputsList.contact.map(input => {
					return(
						<InputText
							label={ input.label }
							name={ input.name }
							value={ props[input.name] }
							onBlur={ props.onInputChange }
							key={ input.name }
						/>
					)
				}) }
			</Accordion>
			<Accordion title="Social Media">
				{ inputsList.social.map(input => {
					return(
						<InputText
							label={ input.label }
							name={ input.name }
							value={ props[input.name] }
							onBlur={ props.onInputChange }
							key={ input.name }
						/>
					)
				}) }
			</Accordion>
		</StyledInfo>
	)
}

export default Info

const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
`
