import React from 'react'
import PropTypes from 'prop-types'

export default class TextInput extends React.Component {
	render() {
		return (
			<div className="input-wrap">
				<input
					type={ this.props.type ? this.props.type : 'text'}
					required
					defaultValue={ this.props.value }
					onBlur={ this.props.onBlur }
					name={ this.props.name }
				/>
				<label htmlFor={ this.props.name }>
					{ this.props.label }
				</label>
			</div>
		)
	}
}

TextInput.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	onBlur: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}
