import React from 'react'

export default class TextInput extends React.Component {
	render() {
		return (
			<div className="input-wrap">
				<input
					type={ this.props.type ? this.props.type : 'text'}
					required
					defaultValue={ this.props.value }
					onBlur={ this.props.onBlur }
					name={ this.props.name }
				/>
				<label htmlFor={ this.props.name }>
					{ this.props.label }
				</label>
			</div>
		)
	}
}
