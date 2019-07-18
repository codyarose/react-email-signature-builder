import React from 'react'
import styled from 'styled-components'
import InputRadio from '../../Common/InputRadio'
import CurrentControls from './CurrentControls'

const Controls = ({ activeControl, onControlChange,template, collectionList, onTemplateChange, onInputChange, onCopyCollectionItem, onColorPickerChange, ...props }) => {
	return(
		<StyledControlsContainer>
			<StyledControls>
				<InputRadio
					label="Templates"
					name="templates"
					checked={ activeControl }
					onChange={ onControlChange }
				/>
				<InputRadio
					label="Info"
					name="info"
					checked={ activeControl }
					onChange={ onControlChange }
				/>
				<InputRadio
					label="Styles"
					name="styles"
					checked={ activeControl }
					onChange={ onControlChange }
				/>
				<InputRadio
					label="Collection"
					name="collection"
					checked={ activeControl }
					onChange={ onControlChange }
				/>
			</StyledControls>

			<CurrentControls
				current={ activeControl}
				template={ template }
				collectionList={ collectionList }
				onTemplateChange={ onTemplateChange }
				onInputChange={ onInputChange }
				onCopyCollectionItem={ onCopyCollectionItem }
				onColorPickerChange={ onColorPickerChange }
				accentColor={ props.accentColor }
				{ ...props }
			/>
		</StyledControlsContainer>
	)
}

export default Controls

const StyledControlsContainer = styled.article`
	grid-area: form;
	display: flex;
	flex-direction: column;
	padding: 2rem 2.5rem 2rem 2rem;
	color: #E8E8E8;
	background-color: #504A65;
	overflow-y: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
`

const StyledControls = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
	& > div {
		position: relative;
		flex: 1;
		text-align: center;
	}
	input[type=radio] {
		position: absolute;
		top: auto;
		overflow: hidden;
		clip: rect(1px 1px 1px 1px);
		clip: rect(1px, 1px, 1px ,1px);
		width: 1px;
		height: 1px;
		white-space: nowrap;
		&:checked + label::before {
			transform: translateY(0);
			opacity: 1;
			transition: transform .1s ease-out;
		}
	}
	label {
		display: block;
		position: relative;
		padding: .5rem;
		transition: background-color .1s ease-in-out;
		user-select: none;
		&:hover {
			cursor: pointer;
			background-color: rgba(232,232,232,.1);
		}
		&::before {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			transform: translateY(300%);
			width: 100%;
			height: 2px;
			background-color: #E8E8E8;
			opacity: 0;
			transition: opacity .2s ease-out, transform .2s ease-out;
		}
	}
`
