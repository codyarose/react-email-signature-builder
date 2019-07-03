import React from 'react'
import ReactDOM from 'react-dom'
import SignatureGenerator from './components-new/SignatureGenerator/SignatureGenerator'
import styles from './scss/main.scss'

class App extends React.Component {
	render() {
		return (
			<div>
				<SignatureGenerator />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
