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
		this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(
			this
		)
		this.handleSaveToCollection = this.handleSaveToCollection.bind(this)
		this.handleCollectionItemCopy = this.handleCollectionItemCopy.bind(this)
		this.handleColorPickerChange = this.handleColorPickerChange.bind(this)
	}

	componentDidMount() {
		this.hydrateStateWithLocalStorage()

		window.addEventListener(
			'beforeunload',
			this.handleSaveToLocalStorage.bind(this)
		)
	}

	componentWillUnmount() {
		window.addEventListener(
			'beforeunload',
			this.handleSaveToLocalStorage.bind(this)
		)

		this.handleSaveToLocalStorage()
	}

	handleCollectionItemCopy = e => {
		const itemPreview = e.currentTarget.children[0]
		const itemMarkup = e.currentTarget.children[1]
		itemPreview.addEventListener('mouseleave', () => {
			setTimeout(() => {
				itemPreview.dataset.copy = 'copy'
			}, 200)
		})
		itemPreview.dataset.copy = 'copied!'
		itemPreview.style = ''
		// eslint-disable-next-line no-void
		void itemPreview.offsetWidth
		itemPreview.style.animation = 'copied 1s forwards'
		itemMarkup.select()
		document.execCommand('copy')
	}

	handleControlChange(e) {
		this.setState({ activeControl: e.target.value })
	}

	handleTemplateChange(e) {
		this.setState({ template: e.target.value })
	}

	handleInputChange(e) {
		const {
			target: { name, value },
		} = e
		this.setState({ [name]: value })
	}

	handleColorPickerChange(color) {
		this.setState({ accentColor: color })
	}

	handleCopy() {
		const signatureMarkup = document.getElementById('signatureMarkup')
		signatureMarkup.select()
		document.execCommand('copy')
		this.setState({ copySuccess: 'Copied!' })
	}

	handleSaveToLocalStorage() {
		const { state } = this.state
		Object.keys(state).forEach(key => {
			if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
				localStorage.setItem(key, JSON.stringify(state[key]))
			}
		})
	}

	hydrateStateWithLocalStorage() {
		Object.keys(this.state).forEach(key => {
			if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
				let value = localStorage.getItem(key)

				try {
					value = JSON.parse(value)
					this.setState({ [key]: value })
				} catch (e) {
					this.setState({ [key]: value })
				}
			}
		})
	}

	handleSaveToCollection() {
		const { state } = this.state
		const collectionItem = document.getElementById('signatureMarkup').firstChild
			.textContent
		this.setState({ collection: [...state.collection, collectionItem] })
	}

	render() {
		const {
			activeControl,
			template,
			copySuccess,
			collection,
			accentColor,
			...templateState
		} = this.state

		let currentTemplate
		if (template === 'template1') {
			currentTemplate = <TemplateOne {...templateState} />
		} else if (template === 'template2') {
			currentTemplate = <TemplateTwo {...templateState} />
		}

		return (
			<StyledMainContainer>
				<Controls
					activeControl={activeControl}
					onControlChange={this.handleControlChange}
					template={template}
					onTemplateChange={this.handleTemplateChange}
					onInputChange={this.handleInputChange}
					collectionList={collection}
					onCopyCollectionItem={this.handleCollectionItemCopy}
					onColorPickerChange={this.handleColorPickerChange}
					accentColor={accentColor}
					{...templateState}
				/>
				<Canvas
					onCopy={this.handleCopy}
					copySuccess={copySuccess}
					onSaveToCollection={this.handleSaveToCollection}
				>
					{currentTemplate}
				</Canvas>
			</StyledMainContainer>
		)
	}
}

const StyledMainContainer = styled.main`
	width: 100%;
	height: 100vh;
	background-color: #fff;
	margin: 0 auto;
	display: grid;
	grid-template-columns: auto 3fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 1vw;
	grid-template-areas:
		'form signature'
		'form copy-signature';
`
