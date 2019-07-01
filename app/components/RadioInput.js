import React from 'react'
import PropTypes from 'prop-types'

export default class RadioInput extends React.Component {
	render() {
		return (
			<div className="radio">
				<input
					type="radio"
					name={ this.props.name }
					value={ this.props.name }
					checked={ this.props.checked === this.props.name }
					onChange={ this.props.onChange }
					id={ this.props.name }
				/>
				<label htmlFor={ this.props.name }>
					{ this.props.label }
				</label>
			</div>
		)
	}
}

RadioInput.propTypes = {
	name: PropTypes.string.isRequired,
	checked: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
}
