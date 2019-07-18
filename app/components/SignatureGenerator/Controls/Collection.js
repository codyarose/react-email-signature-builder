import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useCollectionValue } from '../../Contexts/CollectionContext'
import { ButtonSecondary } from '../../Common/Button'

export const Collection = () => {
	const { data, saveToCollection, copyItem } = useCollectionValue()
	const collectionDisplay = () => {
		if (data.collection.length < 1) {
			return <span>you haven't added any items yet!</span>
		}
		return(
			data.collection.map((item, index) => (
				<StyledCollectionItem
					id={`collectionItem${index}`}
					onClick={e => copyItem(e.currentTarget)}
					dangerouslySetInnerHTML={{ __html: item }}
					data-copy="copy html"
					key={index}
				/>
			))
		)
	}
	return (
		<Fragment>
			<ButtonSecondary
				secondary
				onClick={() =>
					saveToCollection(document.getElementById('signatureMarkup').innerHTML)
				}
			>
				Add current signature
			</ButtonSecondary>
			<StyledCollectionContainer>
				{collectionDisplay()}
			</StyledCollectionContainer>
		</Fragment>
	)
}

const StyledCollectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: flipdown 0.2s ease both;
`

const StyledCollectionItem = styled.button`
	position: relative;
	cursor: pointer;
	width: 100%;
	background-color: #fff;
	padding: 1rem;
	margin-bottom: 0.5rem;
	border-radius: 5px;
	overflow: hidden;
	&::before {
		position: absolute;
		content: attr(data-copy);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #504a65;
		font-size: 2rem;
		font-family: 'Roboto Mono', monospace;
		background-color: rgba(255, 255, 255, 0.75);
		opacity: 0;
		transition: opacity 0.2s ease-out;
		pointer-events: none;
	}
	&:hover::before {
		opacity: 1;
	}
	table {
		margin: 0 auto;
	}
	& + textarea {
		opacity: 0;
		height: 0;
	}
	@keyframes copied {
		0% {
			box-shadow: 0 0 10px #fff;
		}
		100% {
			box-shadow: 0 0 0 transparent;
		}
	}
`
