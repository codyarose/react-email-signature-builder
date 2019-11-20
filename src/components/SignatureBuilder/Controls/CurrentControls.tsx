import React, { ReactElement } from 'react'
import { useControlValue } from '../../Contexts/ControlContext'
import { Templates } from './Templates'
import { Info } from './Info'
import { Styles } from './Styles'
import { Collection } from './Collection'

export const CurrentControls = () => {
	const { data } = useControlValue()
	let currentControl: ReactElement
	if (data.control === 'templates') {
		currentControl = <Templates />
	} else if (data.control === 'info') {
		currentControl = <Info />
	} else if (data.control === 'styles') {
		currentControl = <Styles />
	} else if (data.control === 'collection') {
		currentControl = <Collection />
	}
	return currentControl!
}
