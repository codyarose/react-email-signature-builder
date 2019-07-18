import React from 'react'
import styled from 'styled-components'

const Collection = ({ collectionList, onCopyCollectionItem }) => {
	return(
		<React.Fragment>
			{ collectionList.map((item, index) => {
				return(
					<div onClick={ onCopyCollectionItem } key={ index }>
						<StyledCollectionItem
							dangerouslySetInnerHTML={ {__html: item} }
							data-copy='copy'
						/>
						<textarea
							id={ `collectionItem${index}` }
							value={ item }
							readOnly
							cols="0" rows="0"
						/>
					</div>
				)
			}) }
		</React.Fragment>
	)
}

export default Collection

const StyledCollectionItem = styled.div`
	position: relative;
	cursor: pointer;
	background-color: #fff;
	padding: 1rem;
	margin-bottom: .5rem;
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
		color: #504A65;
		font-size: 2rem;
		font-family: 'Roboto Mono', monospace;
		background-color: rgba(255,255,255,.75);
		opacity: 0;
		transition: opacity .2s ease-out;
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
