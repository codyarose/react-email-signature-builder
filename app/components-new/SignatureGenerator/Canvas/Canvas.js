import React, { Fragment } from 'react'
import styled from 'styled-components'
import Preview from './Preview'
import Output from './Output'

const Canvas = ({ children }) => {
	return(
		<Fragment>
			<Preview>
				{ children }
			</Preview>
			<Output>
				{ children }
			</Output>
		</Fragment>
	)
}

export default Canvas
