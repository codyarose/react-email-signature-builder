import React from 'react'
import Templates from './Templates'
import Info from './Info'
import Styles from './Styles'

const CurrentControls = ({ current, template, onTemplateChange, onInputChange }) => {
	return(
		<React.Fragment>
			{
				current === 'templates' ? <Templates checked={ template } onChange={ onTemplateChange } /> :
				current === 'info' ? <Info onInputChange={ onInputChange } /> :
				current === 'styles' ? <Styles /> :
				null
			}
		</React.Fragment>
	)
}

export default CurrentControls
