import React from 'react'
import styled from 'styled-components'
import Controls from './Controls/Controls'
import Canvas from './Canvas/Canvas'
import TemplateOne from '../Templates/Template-1'
import TemplateTwo from '../Templates/Template-2'

export default class SignatureGenerator extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			activeControl: 'templates',
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
			collection: [],
		}

		this.handleTemplateChange = this.handleTemplateChange.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleControlChange = this.handleControlChange.bind(this)
		this.handleCopy = this.handleCopy.bind(this)
		this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this)
		this.handleSaveToCollection = this.handleSaveToCollection.bind(this)
	}

	componentDidMount() {
		this.hydrateStateWithLocalStorage()

		window.addEventListener(
			"beforeunload",
			this.handleSaveToLocalStorage.bind(this)
		)
	}

	componentWillUnmount() {
		window.addEventListener(
			"beforeunload",
			this.handleSaveToLocalStorage.bind(this)
		)

		this.handleSaveToLocalStorage()
	}

	handleControlChange(e) {
		this.setState({
			activeControl: e.target.value
		})
	}

	handleTemplateChange(e) {
		this.setState({
			template: e.target.value
		})
	}

	handleInputChange(e) {
		const { target: { name, value } } = e
		this.setState({
			[name]: value
		})
	}

	handleCopy() {
		const signatureMarkup = document.getElementById('signatureMarkup')
		signatureMarkup.select()
		document.execCommand('copy')
		this.setState({
			copySuccess: 'Copied!'
		})
	}

	handleSaveToLocalStorage() {
		for (let key in this.state) {
			localStorage.setItem(key, JSON.stringify(this.state[key]))
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
					this.setState({ [key]: value })
				}
			}
		}
	}

	handleSaveToCollection() {
		const collectionItem = document.getElementById('signatureMarkup').firstChild.textContent
		this.setState({
			collection: [...this.state.collection, collectionItem]
		})
		console.log(this.state.collection)
	}

	render() {
		const StyledMainContainer = styled.main`
			width: 100%;
			height: 100vh;
			background-color: #fff;
			margin: 0 auto;
			display: grid;
			grid-template-columns: minmax(200px,400px) 3fr;
			grid-template-rows: 1fr 1fr;
			grid-gap: 1vw;
			grid-template-areas:
				'form signature'
				'form copy-signature';
		`

		const { activeControl, template, copySuccess, ...templateState } = this.state

		return(
			<StyledMainContainer>
				<Controls
					activeControl={ activeControl }
					onControlChange={ this.handleControlChange }
					template={ template }
					onTemplateChange={ this.handleTemplateChange }
					onInputChange={ this.handleInputChange }
				/>
				<Canvas
					onCopy={ this.handleCopy }
					copySuccess={ copySuccess }
					onSaveToCollection={ this.handleSaveToCollection }
				>
					{(this.state.template === 'template1') ?
						<TemplateOne { ...templateState } /> :
						(this.state.template === 'template2') ?
						<TemplateTwo { ...templateState } /> :
						null
					}
				</Canvas>
			</StyledMainContainer>
		)
	}
}
