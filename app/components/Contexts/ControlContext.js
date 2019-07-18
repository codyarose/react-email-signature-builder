import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

export const ControlContext = createContext()

export const ControlProvider = ({ children }) => {
	const [state, setState] = useState({
		control: 'templates',
		template: 'template1',
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
