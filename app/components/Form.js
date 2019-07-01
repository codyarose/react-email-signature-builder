import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'

const Form = props => {
	return(
		<form className="input-group">
			<TextInput
				label="Portrait URL"
				name="portrait"
				value={ props.portrait }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Logo URL"
				name="logo"
				value={ props.logo }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="First name"
				name="firstName"
				value={ props.firstName }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Last name"
				name="lastName"
				value={ props.lastName }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Job title"
				name="jobTitle"
				value={ props.jobTitle }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Department"
				name="department"
				value={ props.department }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Company name"
				name="companyName"
				value={ props.companyName }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Office phone"
				name="officePhone"
				value={ props.officePhone }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Mobile phone"
				name="mobilePhone"
				value={ props.mobilePhone }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Email address"
				name="emailAddress"
				value={ props.emailAddress }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Website URL"
				name="websiteUrl"
				value={ props.websiteUrl }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Address"
				name="address"
				value={ props.address }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Facebook"
				name="socialFacebook"
				value={ props.socialFacebook }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Twitter"
				name="socialTwitter"
				value={ props.socialTwitter }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="LinkedIn"
				name="socialLinkedin"
				value={ props.socialLinkedin }
				onBlur={ props.onInputChange }
			/>
			<TextInput
				label="Instagram"
				name="socialInstagram"
				value={ props.socialInstagram }
				onBlur={ props.onInputChange }
			/>
		</form>
	)
}

export default Form

Form.propTypes = {
	onInputChange: PropTypes.func,
}
