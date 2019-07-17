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
		accentColor: '#000',
		socialColor: ''
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
				updateAccentColor: color => {
					setState({
						...state,
						accentColor: color,
					})
				},
				updateSocialColor: color => {
					setState({
						...state,
						socialColor: color,
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
	children: PropTypes.node,
}
