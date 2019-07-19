import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Description = ({ children }) => {
	return(
		<StyledDescription>
			{children}
		</StyledDescription>
	)
}

Description.propTypes = {
	children: PropTypes.string
}

const StyledDescription = styled.p`
	font-size: 0.875rem;
	margin-bottom: 1.5rem;
	text-align: center;
`
