import React from 'react'
import styled from 'styled-components'
import { useInfoValue } from '../../Contexts/InfoContext'
import { InputText } from '../../Common/InputText'
import { Accordion } from '../../Common/Accordion'
import { inputList } from '../../Common/InputList'

export const Info = () => {
	const { data, updateInfo } = useInfoValue()
	return (
		<StyledInfo>
			{inputList.default.map(input => (
				<InputText
					label={input.label}
					name={input.name}
					value={data[input.name]}
					onBlur={updateInfo}
					key={input.name}
				/>
			))}
			<Accordion title="Contact Info">
				{inputList.contact.map(input => (
					<InputText
						label={input.label}
						name={input.name}
						value={data[input.name]}
						onBlur={updateInfo}
						key={input.name}
					/>
				))}
			</Accordion>
			<Accordion title="Social Media">
				{inputList.social.map(input => (
					<InputText
						label={input.label}
						name={input.name}
						value={data[input.name]}
						onBlur={updateInfo}
						key={input.name}
					/>
				))}
			</Accordion>
		</StyledInfo>
	)
}

const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
`
