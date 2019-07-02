import React from 'react'
import { ChromePicker } from 'react-color'
import reactCSS from 'reactcss'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class ColorPicker extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			displayColorPicker: false,
			color: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}

	handleChange(color) {
		this.setState({
			color: color.hex
		})
		this.props.action(color)
	}
	handleClick() {
		this.setState({
			displayColorPicker: !this.state.displayColorPicker
		})
	}
	handleClose() {
		this.setState({
			displayColorPicker: false
		})
	}

	render() {
		const StyledColorPicker = styled.div`
			position: relative;
		`
		const Swatch = styled.div`
			width: 100%;
			max-width: 5rem;
			padding: 5px;
			margin-top: 1rem;
			background: #fff;
			border-radius: 1px;
			box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
			cursor: pointer;
		`
		const Color = styled.div`
			width: 100%;
			height: 2rem;
			border-radius: 2px;
			background: ${ props => props.setColor };
		`
		const Popover = styled.div`
			position: absolute;
			top: calc(100% + 0.75rem);
			left: 0;
			padding: 5px;
			background-color: #fff;
			z-index: 2;
			&::before {
				content: '';
				position: absolute;
				top: -0.25rem;
				left: 1rem;
				width: 1rem;
				height: 1rem;
				background-color: #fff;
				transform: rotate(45deg);
				z-index: -1;
			}
		`
		const Cover = styled.div`
			position: fixed;
			z-index: 2;
		`

		return(
			<StyledColorPicker>
				<Swatch onClick={ this.handleClick }>
					<Color setColor={ this.props.setColor } />
				</Swatch>
				{ this.state.displayColorPicker &&
					<Popover style={ styles.popover }>
						<Cover
							style={ styles.cover }
							onClick={ this.handleClose }
						/>
						<ChromePicker
							color={ this.props.setColor }
							onChange={ this.handleChange }
						/>
					</Popover>
				}
			</StyledColorPicker>
		)
	}
}

ColorPicker.propTypes = {
	action: PropTypes.func,
	setColor: PropTypes.string
}
