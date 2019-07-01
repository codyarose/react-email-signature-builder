import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import ColorPicker from './ColorPicker'
import Form from './Form'
import Signature from './Signature'
import Signature2 from './Signature2'

export default class Generate extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			inputGroup: 'templates',
			template: 'template1',
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
			copySuccess: '',
			accentColor: '#000',
			test: '',
		}

		this.copySignature = this.copySignature.bind(this)
		this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this)
		this.getColor = this.getColor.bind(this)
		this.getTemplate = this.getTemplate.bind(this)
		this.handleInputGroupChange = this.handleInputGroupChange.bind(this)
		this.onInputChange = this.onInputChange.bind(this)
	}

	onInputChange(event) {
		const { target: { name, value } } = event
		this.setState({
			[name]: value
		})
	}

	getColor(color) {
		this.setState({
			accentColor: color.hex
		})
	}

	getTemplate(e) {
		this.setState({
			template: e.target.value

		})
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

	saveStateToLocalStorage() {
		for (let key in this.state) {
			localStorage.setItem(key, JSON.stringify(this.state[key]))
		}
	}

	componentDidMount() {
		this.hydrateStateWithLocalStorage()

		window.addEventListener(
			"beforeunload",
			this.saveStateToLocalStorage.bind(this)
		)
	}

	componentWillUnmount() {
		window.removeEventListener(
			"beforeunload",
			this.saveStateToLocalStorage.bind(this)
		)

		this.saveStateToLocalStorage()
	}

	handleInputGroupChange(e) {
		this.setState({
			inputGroup: e.target.value
		})
	}

	render() {
		const {inputGroup, template, copySuccess, ...signatureState} = this.state;

		return(
			<main className="container">
				<article className="container__form">
					<form className="input-group-select">
						<div className="radio">
							<input
								type="radio"
								name="templates"
								value="templates"
								checked={ inputGroup === 'templates' }
								onChange={ this.handleInputGroupChange }
								id="templates"
							/>
							<label htmlFor="templates">Templates</label>
						</div>
						<div className="radio">
							<input
								type="radio"
								name="info"
								value="info"
								checked={ inputGroup === 'info' }
								onChange={ this.handleInputGroupChange }
								id="info"
							/>
							<label htmlFor="info">Info</label>
						</div>
						<div className="radio">
							<input
								type="radio"
								name="styles"
								value="styles"
								checked={ inputGroup === 'styles' }
								onChange={ this.handleInputGroupChange }
								id="styles"
							/>
							<label htmlFor="styles">Styles</label>
						</div>
					</form>
					{ inputGroup === 'templates' ?
						<form>
							<div className="radio">
								<label>
									<input
										type="radio"
										name="template1"
										value="template1"
										checked={ template === 'template1' }
										onChange={ this.getTemplate }
									/>
									Template 1
								</label>
							</div>
							<div className="radio">
								<label>
									<input
										type="radio"
										name="template2"
										value="template2"
										checked={ template === 'template2' }
										onChange={ this.getTemplate }
									/>
									Template 2
								</label>
							</div>
						</form> : inputGroup === 'info' ?
						<Form
							{ ...signatureState }
							onInputChange={ this.onInputChange }
						/> : inputGroup === 'styles' ?
						<div>
							<label>Accent color</label>
							<ColorPicker
								setColor={ this.state.accentColor }
								action={ this.getColor }
							/>
						</div> : null
					}
				</article>

				<article className="container__signature">
					{(template === 'template1') ?
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
