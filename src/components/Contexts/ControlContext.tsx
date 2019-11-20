import React, { useState, createContext, useContext, ReactNode, FormEvent } from 'react'
import PropTypes from 'prop-types'
import { copyToClipboard } from '../Common/CopyToClipboard'

interface ControlContextProps {
	//
}

interface ControlProviderProps {
	children: ReactNode,
}

interface InitialState {
	control: string,
	template: string,
	collection: string[],
}

export const ControlContext = createContext<Partial<ControlContextProps>>({})

export const ControlProvider = ({ children }: ControlProviderProps) => {
	const [state, setState] = useState<InitialState>({
		control: 'templates',
		template: 'template1',
		collection: [],
	})
	return (
		<ControlContext.Provider
			value={{
				data: state,
				changeControl: (e: FormEvent<HTMLInputElement>) => {
					setState({
						...state,
						control: e.currentTarget.value
					})
				},
				changeTemplate: (e: FormEvent<HTMLInputElement>) => {
					setState({
						...state,
						template: e.currentTarget.value
					})
				},
				saveToCollection: (collectionItem: any) => {
					setState({
						...state,
						collection: [...state.collection, collectionItem],
					})
				},
				copyItem: (item: any) => {
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
