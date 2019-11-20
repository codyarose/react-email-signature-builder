import React, { ReactNode } from 'react'
import styled from 'styled-components'

export interface DescriptionProps {
	children: ReactNode
}

export const Description = ({ children }: DescriptionProps) => {
	return (
		<StyledDescription>
			{children}
		</StyledDescription>
	)
}

const StyledDescription = styled.p`
	font-size: 0.875rem;
	margin-bottom: 1.5rem;
	text-align: center;
`
