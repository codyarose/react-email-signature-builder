import React from 'react'
import ReactDOM from 'react-dom'
import Generate from './components/Generate'
import styles from './scss/main.scss'

class App extends React.Component {
	render() {
		return (
			<div>
				<Generate />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
