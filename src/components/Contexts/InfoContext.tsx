import React, { useState, createContext, useContext, ReactNode, FormEvent } from 'react'
import PropTypes from 'prop-types'

interface InfoContextProps {
	data: any,
	updateInfo: any,
	updateAccentColor: any,
	updateSocialColor: any,
}

interface InfoProviderProps {
	children: ReactNode,
}

export const InfoContext = createContext<Partial<InfoContextProps>>({})

export const InfoProvider = ({ children }: InfoProviderProps) => {
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
		socialColor: '#000',
	})
	return (
		<InfoContext.Provider
			value={{
				data: state,
				updateInfo: (e: FormEvent<HTMLInputElement>) => {
					setState({
						...state,
						[e.currentTarget.name]: e.currentTarget.value,
					})
				},
				updateAccentColor: (color: string) => {
					setState({
						...state,
						accentColor: color,
					})
				},
				updateSocialColor: (color: string) => {
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
