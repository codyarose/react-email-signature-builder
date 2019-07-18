import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { copyToClipboard } from '../Common/CopyToClipboard'

export const CollectionContext = createContext()

export const CollectionProvider = ({ children }) => {
	const [state, setState] = useState({
		collection: [],
	})
	return (
		<CollectionContext.Provider
			value={{
				data: state,
				saveToCollection: collectionItem => {
					setState({
						...state,
						collection: [...state.collection, collectionItem],
					})
				},
				copyItem: item => {
					copyToClipboard(item.id)
					item.addEventListener('mouseleave', () => {
						setTimeout(() => {
							item.dataset.copy = 'copy'
						}, 200)
					})
					item.dataset.copy = 'copied!'
					item.style = ''
					// eslint-disable-next-line no-void
					void item.offsetWidth
					item.style.animation = 'copied 1s forwards'
				},
			}}
		>
			{children}
		</CollectionContext.Provider>
	)
}

export const useCollectionValue = () => useContext(CollectionContext)

CollectionProvider.propTypes = {
	children: PropTypes.node,
}
