import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { SignatureBuilder } from './components/SignatureBuilder/SignatureBuilder'

const App = () => {
	const GlobalStyle = createGlobalStyle`
		body {
			margin: 0;
			font-family: 'Roboto Mono', monospace;
		}
		@keyframes flipdown {
			0% {
				opacity: 0;
				transform-origin: top center;
				transform: rotateX(-90deg);
			}
			90% {
				opacity: 1;
			}
			100% {
				transform-origin: top center;
				transform: rotateX(0deg);
			}
		}
	`
	return (
		<>
			<GlobalStyle />
			<SignatureBuilder />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
