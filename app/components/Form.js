import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import Accordion from './Accordion'

const Form = props => {
	const inputsDefault = [
		{
			label: 'Portrait URL',
			name: 'portrait'
		},
		{
			label: 'Logo URL',
			name: 'logo'
		},
		{
			label: 'First name',
			name: 'firstName'
		},
		{
			label: 'Last name',
			name: 'lastName'
		},
		{
			label: 'Job title',
			name: 'jobTitle'
		},
		{
			label: 'Department',
			name: 'department'
		},
		{
			label: 'Company name',
			name: 'companyName'
		},
		{
			label: 'Website URL',
			name: 'websiteUrl'
		},
	]

	const inputsContact = [
		{
			label: 'Office phone',
			name: 'officePhone'
		},
		{
			label: 'Mobile phone',
			name: 'mobilePhone'
		},
		{
			label: 'Email address',
			name: 'emailAddress'
		},
		{
			label: 'Address',
			name: 'address'
		},
	]

	const inputsSocial = [
		{
			label: 'Facebook',
			name: 'socialFacebook'
		},
		{
			label: 'Twitter',
			name: 'socialTwitter'
		},
		{
			label: 'LinkedIn',
			name: 'socialLinkedin'
		},
		{
			label: 'Instagram',
			name: 'socialInstagram'
		},
	]

	return(
		<form className="input-group">
			{ inputsDefault.map(input => {
				return(
					<TextInput
						label={input.label}
						name={input.name}
						value={props[input.name]}
						onBlur={props.onInputChange}
						key={input.name}
					/>
				)
			}) }
			<Accordion title="Contact Info">
				{ inputsContact.map(input => {
					return(
						<TextInput
							label={input.label}
							name={input.name}
							value={props[input.name]}
							onBlur={props.onInputChange}
							key={input.name}
						/>
					)
				}) }
			</Accordion>
			<Accordion title="Social Media">
				{ inputsSocial.map(input => {
					return(
						<TextInput
							label={input.label}
							name={input.name}
							value={props[input.name]}
							onBlur={props.onInputChange}
							key={input.name}
						/>
					)
				}) }
			</Accordion>
		</form>
	)
}

export default Form

Form.propTypes = {
	onInputChange: PropTypes.func,
}
