import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

export const CollectionContext = createContext()

export const CollectionProvider = ({ children }) => {
	const [state, setState] = useState({
		collection: [],
	})
	return (
		<CollectionContext.Provider
			value={{
				data: state,
				copyFromCollection: e => {
					const itemPreview = e.currentTarget.children[0]
					const itemMarkup = e.currentTarget.children[1]
					itemPreview.addEventListener('mouseleave', () => {
						setTimeout(() => {
							itemPreview.dataset.copy = 'copy'
						}, 200)
					})
					itemPreview.dataset.copy = 'copied!'
					itemPreview.style = ''
					// eslint-disable-next-line no-void
					void itemPreview.offsetWidth
					itemPreview.style.animation = 'copied 1s forwards'
					itemMarkup.select()
					document.execCommand('copy')
				},
				saveToCollection: () => {
					const collectionItem = document.getElementById('signatureMarkup')
						.firstChild.textContent
					setState({ collection: [...state.collection, collectionItem] })
				},
			}}
		>
			{children}
		</CollectionContext.Provider>
	)
}

export const useCollectionValue = () => useContext(CollectionContext)

CollectionProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}
