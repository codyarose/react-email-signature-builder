import React from 'react'

const TemplateOne = props => {
	return(
		<table cellPadding="0" cellSpacing="0"
			style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
			<tbody>
				<tr>
					<td style={{verticalAlign: 'top'}}>
						<table cellPadding="0" cellSpacing="0"
							style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
							<tbody>
								<tr>
									<td style={{textAlign: 'center'}}>
										<img width="130"
											src={ props.portrait ?
													props.portrait :
													'https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/placeholder-image@2x.png'
												}
											role="presentation" style={{maxWidth: '130px', display: 'block'}} />
									</td>
								</tr>
								<tr>
									<td height="24"></td>
								</tr>
								<tr>
									<td style={{textAlign: 'center'}}>
										<img width="130"
											src={ props.logo ?
													props.logo :
													'https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/logo-placeholder@2x.png'
												}
											role="presentation" style={{maxWidth: '130px', display: 'block'}} />
									</td>
								</tr>
								<tr>
									<td height="24"></td>
								</tr>
								{ (props.socialFacebook || props.socialInstagram || props.socialLinkedin || props.socialTwitter) &&
									<tr>
										<td style={{textAlign: 'center'}}>
											<table cellPadding="0" cellSpacing="0"
												style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', display: 'inline-block'}}>
												<tbody>
													<tr style={{textAlign: 'center'}}>
														{ props.socialFacebook &&
															<React.Fragment>
																<td>
																	<a href={ `https://${ props.socialFacebook }` } color={ props.socialColor }
																		style={{display: 'inline-block', padding: '0px', backgroundColor: props.socialColor}}>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon.png"
																			alt="facebook" color={ props.socialColor }
																			style={{backgroundColor: props.socialAnchor, maxWidth: '135px', display: 'block'}} />
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														}
														{ props.socialTwitter &&
															<React.Fragment>
																<td>
																	<a href={ `https://${ props.socialTwitter }` } color={ props.socialColor }
																		style={{display: 'inline-block', padding: '0px', backgroundColor: props.socialColor}}>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon.png"
																			alt="twitter" color={ props.socialColor }
																			style={{backgroundColor: props.socialAnchor, maxWidth: '135px', display: 'block'}} />
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														}
														{ props.socialLinkedin &&
															<React.Fragment>
																<td>
																	<a href={ `https://${ props.socialLinkedin }` } color={ props.socialColor }
																		style={{display: 'inline-block', padding: '0px', backgroundColor: props.socialColor}}>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon.png"
																			alt="linkedin" color={ props.socialColor }
																			style={{backgroundColor: props.socialAnchor, maxWidth: '135px', display: 'block'}} />
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														}
														{ props.socialInstagram &&
															<React.Fragment>
																<td>
																	<a href={ `https://${ props.socialInstagram }` } color={ props.socialColor }
																		style={{display: 'inline-block', padding: '0px', backgroundColor: props.socialColor}}>
																		<img
																			src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon.png"
																			alt="instagram" color={ props.socialColor }
																			style={{backgroundColor: props.socialAnchor, maxWidth: '135px', display: 'block'}} />
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
							<span>{ props.firstName ? props.firstName : 'John' }</span><span>&nbsp;</span><span>{ props.lastName ? props.lastName : 'Smith' }</span>
						</h3>
						{ props.jobTitle &&
							<p color="#000000" fontSize="medium"
								style={{margin: '0px', color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '22px'}}>
								<span>{ props.jobTitle }</span>
							</p>
						}
						{ (props.department || props.companyName) &&
							<p color="#000000" fontSize="medium"
								style={{margin: '0px', fontWeight: '500', color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '22px'}}>
								<span>{ props.department }</span>{ props.department && ( props.companyName && <span>&nbsp;|&nbsp;</span> ) }<span>{ props.companyName }</span>
							</p>
						}
						<table cellPadding="0" cellSpacing="0"
							style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%'}}>
							<tbody>
								<tr>
									<td height="24"></td>
								</tr>
								<tr>
									<td height="1" color={ props.accentColor } direction="horizontal"
										style={{width: '100%', borderBottom: `1px solid ${props.accentColor}`, borderLeft: 'none', display: 'block'}}>
									</td>
								</tr>
								<tr>
									<td height="16"></td>
								</tr>
							</tbody>
						</table>
						{ (props.officePhone || props.mobilePhone || props.emailAddress || props.websiteUrl || props.address) &&
							<table cellPadding="0" cellSpacing="0"
								style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
								<tbody>
									{ (props.officePhone || props.mobilePhone) &&
										<tr height="25" style={{verticalAlign: 'middle'}}>
											<td width="30" style={{verticalAlign: 'middle'}}>
												<table cellPadding="0" cellSpacing="0"
													style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
													<tbody>
														<tr>
															<td style={{verticalAlign: 'bottom'}}>
																<span
																	color={ props.accentColor }
																	style={{display: 'block', backgroundColor: props.accentColor, width: '11px'}}>
																	<img
																		src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon.png"
																		color={ props.accentColor }
																		style={{width: '12px', display: 'block', backgroundColor: props.accentColor}} />
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style={{padding: '0px', color: 'rgb(0, 0, 0)'}}>
												<a href={ `tel:${ props.officePhone }` } color="#000000"
													style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
												<span>{ props.officePhone }</span></a>{ officePhone && ( mobilePhone && <span>&nbsp;|&nbsp;</span> ) }<a href={ `tel:${ props.mobilePhone }` } color="#000000"
													style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
												<span>{ props.mobilePhone }</span>
												</a>
											</td>
										</tr>
									}
									{ props.emailAddress &&
										<tr height="25" style={{verticalAlign: 'middle'}}>
											<td width="30" style={{verticalAlign: 'middle'}}>
												<table cellPadding="0" cellSpacing="0"
													style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
													<tbody>
														<tr>
															<td style={{verticalAlign: 'bottom'}}>
																<span
																	color={ props.accentColor }
																	style={{display: 'block', backgroundColor: props.accentColor, width: '11px'}}>
																	<img
																		src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon.png"
																		color={ props.accentColor }
																		style={{width: '12px', display: 'block', backgroundColor: props.accentColor}} />
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style={{padding: '0px'}}>
												<a href={ `mailto:${ props.emailAddress }` } color="#000000"
													style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
													<span>{ props.emailAddress }</span>
												</a>
											</td>
										</tr>
									}
									{ props.websiteUrl &&
										<tr height="25" style={{verticalAlign: 'middle'}}>
											<td width="30" style={{verticalAlign: 'middle'}}>
												<table cellPadding="0" cellSpacing="0"
													style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
													<tbody>
														<tr>
															<td style={{verticalAlign: 'bottom'}}>
																<span
																	color={ props.accentColor }
																	style={{display: 'block', backgroundColor: props.accentColor, width: '11px'}}>
																	<img
																		src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon.png"
																		color={ props.accentColor }
																		style={{width: '12px', display: 'block', backgroundColor: props.accentColor}} />
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style={{padding: '0px'}}>
												<a href={`https://${ props.websiteUrl }`} color="#000000"
													style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
													<span>{ props.websiteUrl }</span>
												</a>
											</td>
										</tr>
									}
									{ props.address &&
										<tr height="25" style={{verticalAlign: 'middle'}}>
											<td width="30" style={{verticalAlign: 'middle'}}>
												<table cellPadding="0" cellSpacing="0"
													style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
													<tbody>
														<tr>
															<td style={{verticalAlign: 'bottom'}}>
																<span
																	color={ props.accentColor }
																	style={{display: 'block', backgroundColor: props.accentColor, width: '11px'}}>
																	<img
																		src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon.png"
																		color={ props.accentColor }
																		style={{width: '12px', display: 'block', backgroundColor: props.accentColor}} />
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
														{ props.address }
													</span>
												</span>
											</td>
										</tr>
									}
								</tbody>
							</table>
						}
						<table cellPadding="0" cellSpacing="0"
							style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
							<tbody>
								<tr>
									<td height="16"></td>
								</tr>
							</tbody>
						</table>
						<table cellPadding="0" cellSpacing="0"
							style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
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

export default TemplateOne
