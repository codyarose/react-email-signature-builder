import React from 'react'
import { ChromePicker } from 'react-color'
import reactCSS from 'reactcss'

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
		const styles = reactCSS({
			'default': {
				color: {
					width: '36px',
					height: '14px',
					borderRadius: '2px',
					background: this.props.setColor,
				},
				swatch: {
					padding: '5px',
					background: '#fff',
					borderRadius: '1px',
					boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
					display: 'inline-block',
					cursor: 'pointer',
				},
				popover: {
					position: 'absolute',
					zIndex: '2',
				},
				cover: {
					position: 'fixed',
					zIndex: '2',
				},
			},
		})
		return(
			<div>
				<div
					style={ styles.swatch }
					onClick={ this.handleClick }
				>
					<div style={ styles.color } />
				</div>
				{ this.state.displayColorPicker &&
					<div style={ styles.popover }>
						<div
							style={ styles.cover }
							onClick={ this.handleClose }
						/>
						<ChromePicker
							color={ this.props.setColor }
							onChange={ this.handleChange }
						/>
					</div>
				}
			</div>
		)
	}
}
