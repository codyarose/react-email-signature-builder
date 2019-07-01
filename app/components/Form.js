import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'

const Form = props => {
	const inputs = [
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
			label: 'Website URL',
			name: 'websiteUrl'
		},
		{
			label: 'Address',
			name: 'address'
		},
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
			{ inputs.map(input => {
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
		</form>
	)
}

export default Form

Form.propTypes = {
	onInputChange: PropTypes.func,
}
