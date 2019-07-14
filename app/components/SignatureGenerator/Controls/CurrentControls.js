import React from 'react'
import { useStateValue } from '../../Contexts/StateContext'
import { Templates } from './Templates'
import { Info } from './Info'
import { Styles } from './Styles'
import { Collection } from './Collection'

export const CurrentControls = () => {
	const [{ control }] = useStateValue()
	let currentControl
	if (control === 'templates') {
		currentControl = <Templates />
	} else if (control === 'info') {
		currentControl = <Info />
	} else if (control === 'styles') {
		currentControl = <Styles />
	} else if (control === 'collection') {
		currentControl = <Collection />
	}
	return currentControl
}
