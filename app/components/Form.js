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

		return(
			<form className="input-group">
				<div className="input-wrap">
					<input
						type="text"
						required
						value={portrait}
						onChange={ this.onUpdate }
						name="portrait"
					/>
					<label htmlFor="portrait">Portrait URL</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={logo}
						onChange={ this.onUpdate }
						name="logo"
					/>
					<label htmlFor="logo">Logo image URL</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={firstName}
						onChange={ this.onUpdate }
						name="firstName"
					/>
					<label htmlFor="firstName">First name</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ lastName }
						onChange={ this.onUpdate }
						name="lastName"
					/>
					<label htmlFor="lastName">Last name</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ jobTitle }
						onChange={ this.onUpdate }
						name="jobTitle"
					/>
					<label htmlFor="jobTitle">Job title</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ department }
						onChange={ this.onUpdate }
						name="department"
					/>
					<label htmlFor="department">Department</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ companyName }
						onChange={ this.onUpdate }
						name="companyName"
					/>
					<label htmlFor="jobTitle">Company name</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ officePhone }
						onChange={ this.onUpdate }
						name="officePhone"
					/>
					<label htmlFor="officePhone">Office phone number</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ mobilePhone }
						onChange={ this.onUpdate }
						name="mobilePhone"
					/>
					<label htmlFor="mobilePhone">Mobile phone number</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ emailAddress }
						onChange={ this.onUpdate }
						name="emailAddress"
					/>
					<label htmlFor="emailAddress">Email address</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ websiteUrl }
						onChange={ this.onUpdate }
						name="websiteUrl"
					/>
					<label htmlFor="websiteUrl">Website URL</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ address }
						onChange={ this.onUpdate }
						name="address"
					/>
					<label htmlFor="address">Address</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ socialFacebook }
						onChange={ this.onUpdate }
						name="socialFacebook"
					/>
					<label htmlFor="socialFacebook">Facebook</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ socialTwitter }
						onChange={ this.onUpdate }
						name="socialTwitter"
					/>
					<label htmlFor="socialTwitter">Twitter</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ socialLinkedin }
						onChange={ this.onUpdate }
						name="socialLinkedin"
					/>
					<label htmlFor="socialLinkedin">LinkedIn</label><br/>
				</div>
				<div className="input-wrap">
					<input
						type="text"
						required
						value={ socialInstagram }
						onChange={ this.onUpdate }
						name="socialInstagram"
					/>
					<label htmlFor="socialInstagram">Instagram</label><br/>
				</div>
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
