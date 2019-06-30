import React from 'react'
import PropTypes from 'prop-types'

export default class Form extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			portrait: '',
			logo: '',
			firstName: '',
			lastName: '',
			jobTitle: '',
			department: '',
			companyName: '',
			officePhone: '',
			mobilePhone: '',
			websiteUrl: '',
			emailAddress: '',
			address: '',
			socialLinkedin: '',
			socialFacebook: '',
			socialTwitter: '',
			socialInstagram: '',
		}

		this.onUpdate = this.onUpdate.bind(this)
		this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this)
	}

	onUpdate(e) {
		this.props.onGetFormData(e)
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	clearLocalStorage(e) {
		if (window.confirm("Are you sure you want to reset all fields?")) {
			e.preventDefault()
			localStorage.clear()
			location.reload()
		}
	}

	hydrateStateWithLocalStorage() {
		for (let key in this.state) {
			if (localStorage.hasOwnProperty(key)) {
				let value = localStorage.getItem(key)

				try {
					value = JSON.parse(value)
					this.setState({ [key]: value })
				} catch (e) {
					this.setState({ [key]:value })
				}
			}
		}
	}

	componentDidMount() {
		this.hydrateStateWithLocalStorage()
	}

	render() {
		const {
			portrait,
			logo,
			firstName,
			lastName,
			jobTitle,
			department,
			companyName,
			officePhone,
			mobilePhone,
			websiteUrl,
			emailAddress,
			address,
			socialLinkedin,
			socialFacebook,
			socialTwitter,
			socialInstagram,
		} = this.state

		const { children } = this.props

		return(
			<form className="input-group">
				<div className="input-wrap">
					<label htmlFor="portrait">Portrait image URL</label><br/>
					<input
						type="text"
						placeholder="https://..."
						value={portrait}
						onChange={ this.onUpdate }
						name="portrait"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="logo">Logo image URL</label><br/>
					<input
						type="text"
						placeholder="https://..."
						value={logo}
						onChange={ this.onUpdate }
						name="logo"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="firstName">First name</label><br/>
					<input
						type="text"
						placeholder="First"
						value={firstName}
						onChange={ this.onUpdate }
						name="firstName"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="lastName">Last name</label><br/>
					<input
						type="text"
						placeholder="Last"
						value={ lastName }
						onChange={ this.onUpdate }
						name="lastName"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="jobTitle">Job title</label><br/>
					<input
						type="text"
						placeholder="Job Title"
						value={ jobTitle }
						onChange={ this.onUpdate }
						name="jobTitle"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="department">Department</label><br/>
					<input
						type="text"
						placeholder="Department"
						value={ department }
						onChange={ this.onUpdate }
						name="department"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="jobTitle">Company name</label><br/>
					<input
						type="text"
						placeholder="Company Name"
						value={ companyName }
						onChange={ this.onUpdate }
						name="companyName"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="officePhone">Office phone number</label><br/>
					<input
						type="text"
						placeholder="(123) 456-7890"
						value={ officePhone }
						onChange={ this.onUpdate }
						name="officePhone"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="mobilePhone">Mobile phone number</label><br/>
					<input
						type="text"
						placeholder="(123) 456-7890"
						value={ mobilePhone }
						onChange={ this.onUpdate }
						name="mobilePhone"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="emailAddress">Email address</label><br/>
					<input
						type="text"
						placeholder="name@email.com"
						value={ emailAddress }
						onChange={ this.onUpdate }
						name="emailAddress"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="websiteUrl">Website URL</label><br/>
					<input
						type="text"
						placeholder="https://..."
						value={ websiteUrl }
						onChange={ this.onUpdate }
						name="websiteUrl"
					/>
				</div>
				<div className="input-wrap">
					<label htmlFor="address">Address</label><br/>
					<input
						type="text"
						placeholder="Line 1"
						value={ address }
						onChange={ this.onUpdate }
						name="address"
					/>
				</div>
				<div className="https-prefixed input-wrap">
					<label htmlFor="socialFacebook">Facebook</label><br/>
					https://<input
						type="text"
						placeholder="..."
						value={ socialFacebook }
						onChange={ this.onUpdate }
						name="socialFacebook"
					/>
				</div>
				<div className="https-prefixed input-wrap">
					<label htmlFor="socialTwitter">Twitter</label><br/>
					https://<input
						type="text"
						placeholder="..."
						value={ socialTwitter }
						onChange={ this.onUpdate }
						name="socialTwitter"
					/>
				</div>
				<div className="https-prefixed input-wrap">
					<label htmlFor="socialLinkedin">LinkedIn</label><br/>
					https://<input
						type="text"
						placeholder="..."
						value={ socialLinkedin }
						onChange={ this.onUpdate }
						name="socialLinkedin"
					/>
				</div>
				<div className="https-prefixed input-wrap">
					<label htmlFor="socialInstagram">Instagram</label><br/>
					https://<input
						type="text"
						placeholder="..."
						value={ socialInstagram }
						onChange={ this.onUpdate }
						name="socialInstagram"
					/>
				</div>
				{ children }
				<div className="button-wrap">
					<button
						onClick={ this.clearLocalStorage }
					>
						Reset All
					</button>
				</div>
			</form>
		)
	}
}

Form.propTypes = {
	onGetFormData: PropTypes.func,
}
