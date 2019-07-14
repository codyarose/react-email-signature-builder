import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const InputTextArea = ({ id, children }) => (
	<StyledInputTextArea
		id={id}
		cols="40"
		rows="10"
		readOnly
		value={renderToStaticMarkup(children)}
	/>
)

InputTextArea.propTypes = {
	id: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

const StyledInputTextArea = styled.textarea`
	width: 80%;
	max-width: 500px;
`
