import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

export const InfoContext = createContext()

export const InfoProvider = ({ children }) => {
	const [state, setState] = useState({
		portrait: '',
		logo: '',
		firstName: '',
		lastName: '',
		jobTitle: '',
		department: '',
		companyName: '',
		officePhone: '',
		mobilePhone: '',
		websiteUrl: '',
		emailAddress: '',
		address: '',
		socialLinkedin: '',
		socialFacebook: '',
		socialTwitter: '',
		socialInstagram: '',
		copySuccess: '',
		accentColor: '#000',
	})
	return (
		<InfoContext.Provider
			value={{
				data: state,
				updateInfo: e => {
					setState({
						...state,
						[e.target.name]: e.target.value,
					})
				},
				updateColor: color => {
					setState({
						...state,
						accentColor: color,
					})
				},
			}}
		>
			{children}
		</InfoContext.Provider>
	)
}

export const useInfoValue = () => useContext(InfoContext)

InfoProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}
