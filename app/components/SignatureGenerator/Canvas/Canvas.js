import React, { Fragment } from 'react'
import Preview from './Preview'
import Output from './Output'

const Canvas = ({ children, onCopy, copySuccess, onSaveToCollection }) => {
	return(
		<Fragment>
			<Preview>
				{ children }
			</Preview>
			<Output
				onCopy={ onCopy }
				copySuccess={ copySuccess }
				onSaveToCollection={ onSaveToCollection }
			>
				{ children }
			</Output>
		</Fragment>
	)
}

export default Canvas
