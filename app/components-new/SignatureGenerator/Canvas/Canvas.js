import React from 'react'
import styled from 'styled-components'
import Preview from './Preview'
import Output from './Output'

export default class Canvas extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>
				Canvas.js
				<Preview />
				<Output />
			</div>
		)
	}
}
