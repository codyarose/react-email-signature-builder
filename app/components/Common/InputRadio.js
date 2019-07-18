import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const InputRadio = ({ name, checked, onChange, label }) => (
	<StyledRadio>
		<input
			type="radio"
			name={name}
			value={name}
			checked={checked === name}
			onChange={onChange}
			id={name}
		/>
		<label htmlFor={name}>{label}</label>
	</StyledRadio>
)

InputRadio.propTypes = {
	name: PropTypes.string.isRequired,
	checked: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
}

const StyledRadio = styled.div`
	display: flex;
	margin-bottom: 0.5rem;
	& > input {
		margin-right: 0.5rem;
	}
`
