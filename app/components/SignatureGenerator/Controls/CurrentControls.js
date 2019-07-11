import React from 'react'
import Templates from './Templates'
import Info from './Info'
import Styles from './Styles'
import Collection from './Collection'

const CurrentControls = ({ current, template, onTemplateChange, onInputChange, collectionList, onCopyCollectionItem }) => {
	return(
		<React.Fragment>
			{
				current === 'templates' ? <Templates checked={ template } onChange={ onTemplateChange } /> :
				current === 'info' ? <Info onInputChange={ onInputChange } /> :
				current === 'styles' ? <Styles /> :
				current === 'collection' ? <Collection collectionList={ collectionList } onCopyCollectionItem={ onCopyCollectionItem } /> :
				null
			}
		</React.Fragment>
	)
}

export default CurrentControls
