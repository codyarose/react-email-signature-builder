import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { copyToClipboard } from '../Common/CopyToClipboard'

export const ControlContext = createContext()

export const ControlProvider = ({ children }) => {
	const [state, setState] = useState({
		control: 'templates',
		template: 'template1',
		collection: [],
	})
	return (
		<ControlContext.Provider
			value={{
				data: state,
				changeControl: e => {
					setState({
						...state,
						control: e.target.value
					})
				},
				changeTemplate: e => {
					setState({
						...state,
						template: e.target.value
					})
				},
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
		</ControlContext.Provider>
	)
}

export const useControlValue = () => useContext(ControlContext)

ControlProvider.propTypes = {
	children: PropTypes.node,
}
