import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'

export default class Form extends React.Component {
	render() {
		return(
			<form className="input-group">
				<TextInput
					label="Portrait URL"
					name="portrait"
					value={ this.props.portrait }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Logo URL"
					name="logo"
					value={ this.props.logo }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="First name"
					name="firstName"
					value={ this.props.firstName }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Last name"
					name="lastName"
					value={ this.props.lastName }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Job title"
					name="jobTitle"
					value={ this.props.jobTitle }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Department"
					name="department"
					value={ this.props.department }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Company name"
					name="companyName"
					value={ this.props.companyName }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Office phone"
					name="officePhone"
					value={ this.props.officePhone }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Mobile phone"
					name="mobilePhone"
					value={ this.props.mobilePhone }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Email address"
					name="emailAddress"
					value={ this.props.emailAddress }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Website URL"
					name="websiteUrl"
					value={ this.props.websiteUrl }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Address"
					name="address"
					value={ this.props.address }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Facebook"
					name="socialFacebook"
					value={ this.props.socialFacebook }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Twitter"
					name="socialTwitter"
					value={ this.props.socialTwitter }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="LinkedIn"
					name="socialLinkedin"
					value={ this.props.socialLinkedin }
					onBlur={ this.props.onInputChange }
				/>
				<TextInput
					label="Instagram"
					name="socialInstagram"
					value={ this.props.socialInstagram }
					onBlur={ this.props.onInputChange }
				/>
			</form>
		)
	}
}

Form.propTypes = {
	onInputChange: PropTypes.func,
}
