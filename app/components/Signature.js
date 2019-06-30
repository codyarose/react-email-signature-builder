import React from 'react'

export default class Signature extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			portrait,
			logo,
			firstName,
			lastName,
			jobTitle,
			department,
			companyName,
			officePhone,
			mobilePhone,
			websiteUrl,
			emailAddress,
			address,
			socialLinkedin,
			socialFacebook,
			socialTwitter,
			socialInstagram,
			accentColor
		} = this.props

		const socialColor = accentColor

		const tableStyles = {
			verticalAlign: '-webkit-baseline-middle',
			fontSize: 'medium',
			fontFamily: 'Arial'
		}

		const textCenter = {
			textAlign: 'center'
		}

		const socialAnchor = {
			display: 'inline-block',
			padding: '0px',
			backgroundColor: socialColor
		}

		const socialImage = {
			backgroundColor: socialAnchor,
			maxWidth: '135px',
			display: 'block'
		}

		return (
			<table id="signature" cellPadding="0" cellSpacing="0"
				style={tableStyles}>
				<tbody>
					<tr>
						<td style={{verticalAlign: 'top'}}>
							<table cellPadding="0" cellSpacing="0"
								style={tableStyles}>
								<tbody>
									<tr>
										<td style={textCenter}>
											<img width="130"
												src={ portrait ?
														portrait :
														'https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/placeholder-image@2x.png'
													}
												role="presentation" style={{maxWidth: '130px', display: 'block'}} />
										</td>
									</tr>
									<tr>
										<td height="24"></td>
									</tr>
									<tr>
										<td style={textCenter}>
											<img width="130"
												src={ logo ?
														logo :
														'https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/logo-placeholder@2x.png'
													}
												role="presentation" style={{maxWidth: '130px', display: 'block'}} />
										</td>
									</tr>
									<tr>
										<td height="24"></td>
									</tr>
									{ (socialFacebook || socialInstagram || socialLinkedin || socialTwitter) &&
										<tr>
											<td style={textCenter}>
												<table cellPadding="0" cellSpacing="0"
													style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', display: 'inline-block'}}>
													<tbody>
														<tr style={textCenter}>
															{ socialFacebook &&
																<React.Fragment>
																	<td>
																		<a href={ `https://${ socialFacebook }` } color={ socialColor }
																			style={socialAnchor}>
																			<img
																				src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon.png"
																				alt="facebook" color={ socialColor }
																				style={socialImage} />
																		</a>
																	</td>
																	<td width="5"></td>
																</React.Fragment>
															}
															{ socialTwitter &&
																<React.Fragment>
																	<td>
																		<a href={ `https://${ socialTwitter }` } color={ socialColor }
																			style={socialAnchor}>
																			<img
																				src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon.png"
																				alt="twitter" color={ socialColor }
																				style={socialImage} />
																		</a>
																	</td>
																	<td width="5"></td>
																</React.Fragment>
															}
															{ socialLinkedin &&
																<React.Fragment>
																	<td>
																		<a href={ `https://${ socialLinkedin }` } color={ socialColor }
																			style={socialAnchor}>
																			<img
																				src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon.png"
																				alt="linkedin" color={ socialColor }
																				style={socialImage} />
																		</a>
																	</td>
																	<td width="5"></td>
																</React.Fragment>
															}
															{ socialInstagram &&
																<React.Fragment>
																	<td>
																		<a href={ `https://${ socialInstagram }` } color={ socialColor }
																			style={socialAnchor}>
																			<img
																				src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon.png"
																				alt="instagram" color={ socialColor }
																				style={socialImage} />
																		</a>
																	</td>
																	<td width="5"></td>
																</React.Fragment>
															}
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									}
								</tbody>
							</table>
						</td>
						<td width="46"></td>
						<td style={{padding: '0px', verticalAlign: 'middle'}}>
							<h3 color="#000000" style={{margin: '0px', fontSize: '18px', color: 'rgb(0, 0, 0)'}}>
								<span>{ firstName ? firstName : 'John' }</span><span>&nbsp;</span><span>{ lastName ? lastName : 'Smith' }</span>
							</h3>
							{ jobTitle &&
								<p color="#000000" fontSize="medium"
									style={{margin: '0px', color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '22px'}}>
									<span>{ jobTitle }</span>
								</p>
							}
							{ (department || companyName) &&
								<p color="#000000" fontSize="medium"
									style={{margin: '0px', fontWeight: '500', color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '22px'}}>
									<span>{ department }</span>{ department && ( companyName && <span>&nbsp;|&nbsp;</span> ) }<span>{ companyName }</span>
								</p>
							}
							<table cellPadding="0" cellSpacing="0"
								style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%'}}>
								<tbody>
									<tr>
										<td height="24"></td>
									</tr>
									<tr>
										<td height="1" color={ accentColor } direction="horizontal"
											style={{width: '100%', borderBottom: `1px solid ${accentColor}`, borderLeft: 'none', display: 'block'}}>
										</td>
									</tr>
									<tr>
										<td height="16"></td>
									</tr>
								</tbody>
							</table>
							{ (officePhone || mobilePhone || emailAddress || websiteUrl || address) &&
								<table cellPadding="0" cellSpacing="0"
									style={tableStyles}>
									<tbody>
										{ (officePhone || mobilePhone) &&
											<tr height="25" style={{verticalAlign: 'middle'}}>
												<td width="30" style={{verticalAlign: 'middle'}}>
													<table cellPadding="0" cellSpacing="0"
														style={tableStyles}>
														<tbody>
															<tr>
																<td style={{verticalAlign: 'bottom'}}>
																	<span
																		color={ accentColor }
																		style={{display: 'block', backgroundColor: accentColor, width: '11px'}}>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon.png"
																			color={ accentColor }
																			style={{width: '12px', display: 'block', backgroundColor: accentColor}} />
																	</span>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
												<td style={{padding: '0px', color: 'rgb(0, 0, 0)'}}>
													<a href={ `tel:${ officePhone }` } color="#000000"
														style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
													<span>{ officePhone }</span></a>{ officePhone && ( mobilePhone && <span>&nbsp;|&nbsp;</span> ) }<a href={ `tel:${ mobilePhone }` } color="#000000"
														style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
													<span>{ mobilePhone }</span>
													</a>
												</td>
											</tr>
										}
										{ emailAddress &&
											<tr height="25" style={{verticalAlign: 'middle'}}>
												<td width="30" style={{verticalAlign: 'middle'}}>
													<table cellPadding="0" cellSpacing="0"
														style={tableStyles}>
														<tbody>
															<tr>
																<td style={{verticalAlign: 'bottom'}}>
																	<span
																		color={ accentColor }
																		style={{display: 'block', backgroundColor: accentColor, width: '11px'}}>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon.png"
																			color={ accentColor }
																			style={{width: '12px', display: 'block', backgroundColor: accentColor}} />
																	</span>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
												<td style={{padding: '0px'}}>
													<a href={ `mailto:${ emailAddress }` } color="#000000"
														style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
														<span>{ emailAddress }</span>
													</a>
												</td>
											</tr>
										}
										{ websiteUrl &&
											<tr height="25" style={{verticalAlign: 'middle'}}>
												<td width="30" style={{verticalAlign: 'middle'}}>
													<table cellPadding="0" cellSpacing="0"
														style={tableStyles}>
														<tbody>
															<tr>
																<td style={{verticalAlign: 'bottom'}}>
																	<span
																		color={ accentColor }
																		style={{display: 'block', backgroundColor: accentColor, width: '11px'}}>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon.png"
																			color={ accentColor }
																			style={{width: '12px', display: 'block', backgroundColor: accentColor}} />
																	</span>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
												<td style={{padding: '0px'}}>
													<a href={`https://${websiteUrl}`} color="#000000"
														style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
														<span>{ websiteUrl }</span>
													</a>
												</td>
											</tr>
										}
										{ address &&
											<tr height="25" style={{verticalAlign: 'middle'}}>
												<td width="30" style={{verticalAlign: 'middle'}}>
													<table cellPadding="0" cellSpacing="0"
														style={tableStyles}>
														<tbody>
															<tr>
																<td style={{verticalAlign: 'bottom'}}>
																	<span
																		color={ accentColor }
																		style={{display: 'block', backgroundColor: accentColor, width: '11px'}}>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon.png"
																			color={ accentColor }
																			style={{width: '12px', display: 'block', backgroundColor: accentColor}} />
																	</span>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
												<td style={{padding: '0px'}}>
													<span color="#000000"
														style={{fontSize: '12px', color: 'rgb(0, 0, 0)'}}>
														<span>
															{ address }
														</span>
													</span>
												</td>
											</tr>
										}
									</tbody>
								</table>
							}
							<table cellPadding="0" cellSpacing="0"
								style={tableStyles}>
								<tbody>
									<tr>
										<td height="16"></td>
									</tr>
								</tbody>
							</table>
							<table cellPadding="0" cellSpacing="0"
								style={tableStyles}>
								<tbody>
									<tr>
										<td height="24"></td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}
