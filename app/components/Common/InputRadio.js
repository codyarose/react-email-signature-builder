import React from 'react'
import PropTypes from 'prop-types'

const InputRadio = props => {
	return(
		<div className="radio">
			<input
				type="radio"
				name={ props.name }
				value={ props.name }
				checked={ props.checked === props.name }
				onChange={ props.onChange }
				id={ props.name }
			/>
			<label htmlFor={ props.name }>
				{ props.label }
			</label>
		</div>
	)
}

export default InputRadio

InputRadio.propTypes = {
	name: PropTypes.string.isRequired,
	checked: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
}
