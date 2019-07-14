import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useCollectionValue } from '../../Contexts/CollectionContext'

export const Collection = () => {
	const { data, copyFromCollection } = useCollectionValue()
	return (
		<Fragment>
			{data.collection.map((item, index) => (
				<div onKeyPress={copyFromCollection} key={index} role="presentation">
					<StyledCollectionItem
						dangerouslySetInnerHTML={{ __html: item }}
						data-copy="copy"
					/>
					<textarea
						id={`collectionItem${index}`}
						value={item}
						readOnly
						cols="0"
						rows="0"
					/>
				</div>
			))}
		</Fragment>
	)
}

const StyledCollectionItem = styled.div`
	position: relative;
	cursor: pointer;
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
