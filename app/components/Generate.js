import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Form from './Form'
import Signature from './Signature'
import '../style.css'

export default class Generate extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: '',
			lastName: '',
			jobTitle: '',
			department: '',
			companyName: '',
			officePhone: '',
			mobilePhone: '',
			websiteUrl: '',
			emailAddress: '',
			addressOne: '',
			addressTwo: '',
			addressThree: '',
			addressFour: '',
			socialLinkedin: '',
			socialFacebook: '',
			socialTwitter: '',
			socialInstagram: '',
			copySuccess: ''
		}

		this.copySignature = this.copySignature.bind(this)
		this.getFormData = this.getFormData.bind(this)
		this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this)
	}

	getFormData(event) {
		const { target: { name, value } } = event
		this.setState({
			[name]: value
		})
		localStorage.setItem([name], value)
	}

	copySignature() {
		const signatureMarkup = document.getElementById('signatureMarkup')
		signatureMarkup.select()
		document.execCommand('copy')
		this.setState({
			copySuccess: 'Copied!'
		})
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
		return(
			<main className="container">
				<article className="container__form">
					<Form
						onGetFormData={ this.getFormData }
					/>
				</article>

				<article className="container__signature">
					<Signature
						{...this.state}
					/>
				</article>

				<article className="container__copy-signature">
					<textarea
						id="signatureMarkup"
						className="signature-textarea"
						rows="10" cols="40"
						readOnly
						value={renderToStaticMarkup(
							<Signature
								{...this.state}
							/>
						)}
					>
					</textarea>
					<br/>
					<button onClick={ this.copySignature }>copy</button>
					<span className="copy-success">
						{ this.state.copySuccess }
					</span>
				</article>
			</main>
		)
	}
}
