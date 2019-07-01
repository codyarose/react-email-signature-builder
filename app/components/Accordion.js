import React from 'react'

const Accordion = props => {
	return(
		<article className="accordion">
			<input className="accordion__checkbox" type="checkbox" defaultChecked />
			<span className="accordion__arrows"></span>
			<h3 className="accordion__title">{ props.title }</h3>
			<section className="accordion__content">
				{ props.children }
			</section>
		</article>
	)
}

export default Accordion
