import React, { ReactNode } from 'react'
import styled from 'styled-components'

type AccordionProps = {
	title: string,
	children: ReactNode,
}

export const Accordion = ({ title, children }: AccordionProps) => (
	<StyledAccordion>
		<Input type="checkbox" defaultChecked tabIndex={-1} />
		<Arrows />
		<Title>{title}</Title>
		<Content>{children}</Content>
	</StyledAccordion>
)

const StyledAccordion = styled.article`
	width: 100%;
	position: relative;
	margin-bottom: 1.5rem;
	&:focus-within {
		& > section {
			opacity: 1;
			transform: translate(0, 0);
			max-height: 1000px;
		}
		& > span {
			&::before {
				transform: translate(-100%, 0) rotate(45deg);
			}
			&::after {
				transform: translate(100%, 0) rotate(-45deg);
			}
		}
	}
`

const Input = styled.input`
	position: absolute;
	cursor: pointer;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 0;
	margin: 0;
	&:checked {
		& ~ section {
			/* margin-top: 0;
			max-height: 0;
			opacity: 0;
			transform: translate(0, 50%); */
		}
		& ~ span {
			/* &::before {
				transform: translate(100%, 0) rotate(45deg);
			}
			&::after {
				transform: translate(-100%, 0) rotate(-45deg);
			} */
		}
	}
`

const Arrows = styled.span`
	position: absolute;
	margin-top: 12px;
	right: 0;
	&::before,
	&::after {
		content: '';
		position: absolute;
		background-color: #fff;
		width: 2px;
		height: 7px;
		transition: transform 0.1s ease-out;
	}
	&::before {
		transform: translate(100%, 0) rotate(45deg);
	}
	&::after {
		transform: translate(-100%, 0) rotate(-45deg);
	}
`

const Title = styled.h3`
	display: block;
	margin: 0;
	cursor: pointer;
`

const Content = styled.section`
	position: relative;
	overflow: hidden;
	padding-top: 1rem;
	margin-top: 0;
	max-height: 0;
	opacity: 0;
	transform: translate(0, 50%);
	transition: all 0.3s ease-in-out;
	z-index: 2;
`
