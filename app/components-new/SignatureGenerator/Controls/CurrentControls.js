import React from 'react'
import Templates from './Templates'
import Info from './Info'
import Styles from './Styles'

const CurrentControls = ({ current }) => {
	return(
		<React.Fragment>
			{
				current === 'templates' ? <Templates /> :
				current === 'info' ? <Info /> :
				current === 'styles' ? <Styles /> :
				null
			}
		</React.Fragment>
	)
}

export default CurrentControls
