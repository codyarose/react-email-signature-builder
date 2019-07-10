import React, { Fragment } from 'react'
import Preview from './Preview'
import Output from './Output'

const Canvas = ({ children, onCopy, copySuccess }) => {
	return(
		<Fragment>
			<Preview>
				{ children }
			</Preview>
			<Output onCopy={ onCopy } copySuccess={ copySuccess }>
				{ children }
			</Output>
		</Fragment>
	)
}

export default Canvas
