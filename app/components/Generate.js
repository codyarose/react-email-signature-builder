import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import ColorPicker from './ColorPicker'
import Form from './Form'
import Signature from './Signature'
import Signature2 from './Signature2'
import '../style.css'

export default class Generate extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			layout: 'option1',
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
			copySuccess: '',
			accentColor: '',
		}

		this.copySignature = this.copySignature.bind(this)
		this.getFormData = this.getFormData.bind(this)
		this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this)
		this.getColor = this.getColor.bind(this)
		this.getLayout = this.getLayout.bind(this)
	}

	getFormData(event) {
		const { target: { name, value } } = event
		this.setState({
			[name]: value
		})
		localStorage.setItem([name], value)
	}

	getColor(color) {
		this.setState({
			accentColor: color.hex
		})
		localStorage.setItem('accentColor', color.hex)
	}

	getLayout(e) {
		this.setState({
			layout: e.target.value

		})
		localStorage.setItem('layout', e.target.value)
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
		const {layout, copySuccess, ...signatureState} = this.state;

		return(
			<main className="container">
				<article className="container__form">
					<form>
						<div className="radio">
							<label>
								<input
									type="radio"
									name="option1"
									value="option1"
									checked={ layout === 'option1' }
									onChange={ this.getLayout }
								/>
								Option 1
							</label>
						</div>
						<div className="radio">
							<label>
								<input
									type="radio"
									name="option2"
									value="option2"
									checked={ layout === 'option2' }
									onChange={ this.getLayout }
								/>
								Option 2
							</label>
						</div>
					</form>
					<Form
						onGetFormData={ this.getFormData }
					>
						<ColorPicker
							setColor={ this.state.accentColor }
							action={ this.getColor }
						/>
					</Form>
				</article>

				<article className="container__signature">
					{(layout === 'option1') ?
						<Signature
							{...signatureState}
						/> :
						<Signature2
							{...signatureState}
						/>
					}
				</article>

				<article className="container__copy-signature">
					<textarea
						id="signatureMarkup"
						className="signature-textarea"
						rows="10" cols="40"
						readOnly
						value={renderToStaticMarkup(
							<Signature
								{...signatureState}
							/>
						)}
					>
					</textarea>
					<br/>
					<button onClick={ this.copySignature }>copy</button>
					<span className="copy-success">
						{ copySuccess }
					</span>
				</article>
			</main>
		)
	}
}
