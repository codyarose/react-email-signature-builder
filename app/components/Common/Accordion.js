import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Accordion = ({ title, children }) => (
	<StyledAccordion>
		<Input type="checkbox" defaultChecked />
		<Arrows />
		<Title>{title}</Title>
		<Content>{children}</Content>
	</StyledAccordion>
)

Accordion.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.array,
	]),
}

const StyledAccordion = styled.article`
	width: 100%;
	position: relative;
	animation: flipdown 0.5s ease both;
	margin-bottom: 1.5rem;

	@keyframes flipdown {
		0% {
			opacity: 0;
			transform-origin: top center;
			transform: rotateX(-90deg);
		}
		5% {
			opacity: 1;
		}
		80% {
			transform: rotateX(8deg);
		}
		83% {
			transform: rotateX(6deg);
		}
		100% {
			transform-origin: top center;
			transform: rotateX(0deg);
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
			margin-top: 0;
			max-height: 0;
			opacity: 0;
			transform: translate(0, 50%);
		}
		& ~ span {
			&::before {
				transform: translate(100%, 0) rotate(45deg);
			}
			&::after {
				transform: translate(-100%, 0) rotate(-45deg);
			}
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
		transform: translate(-100%, 0) rotate(45deg);
	}
	&::after {
		transform: translate(100%, 0) rotate(-45deg);
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
	opacity: 1;
	transition: all 0.3s ease-in-out;
	transform: translate(0, 0);
	padding-top: 1rem;
	z-index: 2;
	max-height: 1000px;
`
