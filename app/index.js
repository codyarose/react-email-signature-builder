import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import SignatureGenerator from './components-new/SignatureGenerator/SignatureGenerator'

class App extends React.Component {
	render() {
		const GlobalStyle = createGlobalStyle`
			body {
				margin: 0;
				font-family: 'Roboto Mono', monospace;
			}
		`
		return (
			<React.Fragment>
				<GlobalStyle />
				<SignatureGenerator />
			</React.Fragment>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
