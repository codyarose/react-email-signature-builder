import React from 'react'
import { useInfoValue } from '../Contexts/InfoContext'

export const TemplateTwo = () => {
	const { data } = useInfoValue()

	return (
		<table
			cellPadding="0"
			cellSpacing="0"
			style={{
				verticalSpacing: '-webkit-baseline-middle',
				fontSize: 'medium',
				fontFamily: 'Arial',
				minWidth: '450px',
			}}
		>
			<tbody>
				<tr>
					<td style={{ textAlign: 'center' }}>
						<img
							width="130"
							src={
								data.portrait
									? data.portrait
									: 'https://api.adorable.io/avatars/face/eyes1/nose5/mouth6/504A65'
							}
							alt="Potrait"
							role="presentation"
							style={{ maxWidth: '130px', display: 'inline-block' }}
						/>
					</td>
				</tr>
				<tr>
					<td height="10"></td>
				</tr>
				<tr style={{ textAlign: 'center' }}>
					<td>
						<h3
							color="#000000"
							style={{ margin: '0px', fontSize: '18px', color: 'rgb(0, 0, 0)' }}
						>
							<span>{data.firstName ? data.firstName : 'John'}</span>
							<span>&nbsp;</span>
							<span>{data.lastName ? data.lastName : 'Smith'}</span>
						</h3>
						{data.jobTitle && (
							<p
								color="#000000"
								fontSize="medium"
								style={{
									margin: '0px',
									color: 'rgb(0, 0, 0)',
									fontSize: '14px',
									lineHeight: '22px',
								}}
							>
								<span>{data.jobTitle}</span>
							</p>
						)}
						{(data.department || data.companyName) && (
							<p
								color="#000000"
								fontSize="medium"
								style={{
									margin: '0px',
									fontWeight: '500',
									color: 'rgb(0, 0, 0)',
									fontSize: '14px',
									lineHeight: '22px',
								}}
							>
								<span>{data.department}</span>
								{data.department && data.companyName && (
									<span>&nbsp;|&nbsp;</span>
								)}
								<span>{data.companyName}</span>
							</p>
						)}
					</td>
				</tr>
				<tr>
					<td>
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalSpacing: '-webkit-baseline-middle',
								fontSize: 'medium',
								fontFamily: 'Arial',
								width: '100%',
							}}
						>
							<tbody>
								<tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td
										height="1"
										color={data.accentColor}
										direction="horizontal"
										style={{
											width: '100%',
											borderBottom: `1px solid ${data.accentColor}`,
											borderLeft: 'none',
											display: 'block',
										}}
									></td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody>
						</table>
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalSpacing: '-webkit-baseline-middle',
								fontSize: 'medium',
								fontFamily: 'Arial',
								width: '100%',
							}}
						>
							<tbody>
								<tr style={{ verticalSpacing: 'middle' }}>
									<td>
										<table
											cellPadding="0"
											cellSpacing="0"
											style={{
												verticalSpacing: '-webkit-baseline-middle',
												fontSize: 'medium',
												fontFamily: 'Arial',
											}}
										>
											<tbody>
												{(data.officePhone || data.mobilePhone) && (
													<tr height="25" style={{ verticalSpacing: 'middle' }}>
														<td
															width="30"
															style={{ verticalSpacing: 'middle' }}
														>
															<table
																cellPadding="0"
																cellSpacing="0"
																style={{
																	verticalSpacing: '-webkit-baseline-middle',
																	fontSize: 'medium',
																	fontFamily: 'Arial',
																}}
															>
																<tbody>
																	<tr>
																		<td style={{ verticalSpacing: 'bottom' }}>
																			<span
																				width="11"
																				color={data.accentColor}
																				style={{
																					display: 'block',
																					backgroundColor: data.accentColor,
																				}}
																			>
																				<img
																					width="12"
																					src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
																					color={data.accentColor}
																					alt="Phone icon"
																					style={{
																						display: 'block',
																						backgroundColor: data.accentColor,
																					}}
																				/>
																			</span>
																		</td>
																	</tr>
																</tbody>
															</table>
														</td>
														<td
															style={{ padding: '0px', color: 'rgb(0, 0, 0)' }}
														>
															<a
																href={`tel:${data.officePhone}`}
																color="#000000"
																style={{
																	textDecoration: 'none',
																	color: 'rgb(0, 0, 0)',
																	fontSize: '12px',
																}}
															>
																<span>{data.officePhone}</span>
															</a>{' '}
															|{' '}
															<a
																href={`tel:${data.mobilePhone}`}
																color="#000000"
																style={{
																	textDecoration: 'none',
																	color: 'rgb(0, 0, 0)',
																	fontSize: '12px',
																}}
															>
																<span>{data.mobilePhone}</span>
															</a>
														</td>
													</tr>
												)}
												{data.emailAddress && (
													<tr height="25" style={{ verticalSpacing: 'middle' }}>
														<td
															width="30"
															style={{ verticalSpacing: 'middle' }}
														>
															<table
																cellPadding="0"
																cellSpacing="0"
																style={{
																	verticalSpacing: '-webkit-baseline-middle',
																	fontSize: 'medium',
																	fontFamily: 'Arial',
																}}
															>
																<tbody>
																	<tr>
																		<td style={{ verticalSpacing: 'bottom' }}>
																			<span
																				width="11"
																				color={data.accentColor}
																				style={{
																					display: 'block',
																					backgroundColor: data.accentColor,
																				}}
																			>
																				<img
																					width="12"
																					src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
																					color={data.accentColor}
																					alt="Email icon"
																					style={{
																						display: 'block',
																						backgroundColor: data.accentColor,
																					}}
																				/>
																			</span>
																		</td>
																	</tr>
																</tbody>
															</table>
														</td>
														<td style={{ padding: '0px' }}>
															<a
																href={`mailto:${data.emailAddress}`}
																color="#000000"
																style={{
																	textDecoration: 'none',
																	color: 'rgb(0, 0, 0)',
																	fontSize: '12px',
																}}
															>
																<span>{data.emailAddress}</span>
															</a>
														</td>
													</tr>
												)}
												{data.websiteUrl && (
													<tr height="25" style={{ verticalSpacing: 'middle' }}>
														<td
															width="30"
															style={{ verticalSpacing: 'middle' }}
														>
															<table
																cellPadding="0"
																cellSpacing="0"
																style={{
																	verticalSpacing: '-webkit-baseline-middle',
																	fontSize: 'medium',
																	fontFamily: 'Arial',
																}}
															>
																<tbody>
																	<tr>
																		<td style={{ verticalSpacing: 'bottom' }}>
																			<span
																				width="11"
																				color={data.accentColor}
																				style={{
																					display: 'block',
																					backgroundColor: data.accentColor,
																				}}
																			>
																				<img
																					width="12"
																					src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
																					color={data.accentColor}
																					alt="Website URL icon"
																					style={{
																						display: 'block',
																						backgroundColor: data.accentColor,
																					}}
																				/>
																			</span>
																		</td>
																	</tr>
																</tbody>
															</table>
														</td>
														<td style={{ padding: '0px' }}>
															<a
																href={`https://${data.websiteUrl}`}
																color="#000000"
																style={{
																	textDecoration: 'none',
																	color: 'rgb(0, 0, 0)',
																	fontSize: '12px',
																}}
															>
																<span>{data.websiteUrl}</span>
															</a>
														</td>
													</tr>
												)}
												{data.address && (
													<tr height="25" style={{ verticalSpacing: 'middle' }}>
														<td
															width="30"
															style={{ verticalSpacing: 'middle' }}
														>
															<table
																cellPadding="0"
																cellSpacing="0"
																style={{
																	verticalSpacing: '-webkit-baseline-middle',
																	fontSize: 'medium',
																	fontFamily: 'Arial',
																}}
															>
																<tbody>
																	<tr>
																		<td style={{ verticalSpacing: 'bottom' }}>
																			<span
																				width="11"
																				color={data.accentColor}
																				style={{
																					display: 'block',
																					backgroundColor: data.accentColor,
																				}}
																			>
																				<img
																					width="12"
																					src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
																					color={data.accentColor}
																					alt="Address icon"
																					style={{
																						display: 'block',
																						backgroundColor: data.accentColor,
																					}}
																				/>
																			</span>
																		</td>
																	</tr>
																</tbody>
															</table>
														</td>
														<td style={{ padding: '0px' }}>
															<span
																color="#000000"
																style={{
																	fontSize: '12px',
																	color: 'rgb(0, 0, 0)',
																}}
															>
																<span>{data.address}</span>
															</span>
														</td>
													</tr>
												)}
											</tbody>
										</table>
									</td>
									<td width="15"></td>
									<td style={{ textAlign: 'right' }}>
										<table
											cellPadding="0"
											cellSpacing="0"
											style={{
												verticalSpacing: '-webkit-baseline-middle',
												fontSize: 'medium',
												fontFamily: 'Arial',
												width: '100%',
											}}
										>
											<tbody>
												{data.logo && (
													<React.Fragment>
														<tr>
															<td>
																<img
																	width="130"
																	src={
																		data.logo
																			? data.logo
																			: 'https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png-3.png'
																	}
																	alt="Logo"
																	role="presentation"
																	style={{
																		maxWidth: '130px',
																		display: 'inline-block',
																	}}
																/>
															</td>
														</tr>
														<tr>
															<td height="10"></td>
														</tr>
													</React.Fragment>
												)}
												{(data.socialFacebook ||
													data.socialInstagram ||
													data.socialLinkedin ||
													data.socialTwitter) && (
													<tr>
														<td>
															<table
																cellPadding="0"
																cellSpacing="0"
																style={{
																	verticalSpacing: '-webkit-baseline-middle',
																	fontSize: 'medium',
																	fontFamily: 'Arial',
																	display: 'inline-block',
																}}
															>
																<tbody>
																	<tr style={{ textAlign: 'right' }}>
																		{data.socialFacebook && (
																			<React.Fragment>
																				<td>
																					<a
																						href={`https://${data.socialFacebook}`}
																						color={data.socialColor}
																						style={{
																							display: 'inline-block',
																							padding: '0px',
																							backgroundColor: data.socialColor,
																						}}
																					>
																						<img
																							height="24"
																							src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
																							alt="facebook"
																							color={data.socialColor}
																							style={{
																								backgroundColor:
																									data.socialColor,
																								maxWidth: '135px',
																								display: 'block',
																							}}
																						/>
																					</a>
																				</td>
																				<td width="5"></td>
																			</React.Fragment>
																		)}
																		{data.socialTwitter && (
																			<React.Fragment>
																				<td>
																					<a
																						href={`https://${data.socialTwitter}`}
																						color={data.socialColor}
																						style={{
																							display: 'inline-block',
																							padding: '0px',
																							backgroundColor: data.socialColor,
																						}}
																					>
																						<img
																							height="24"
																							src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
																							alt="twitter"
																							color={data.socialColor}
																							style={{
																								backgroundColor:
																									data.socialColor,
																								maxWidth: '135px',
																								display: 'block',
																							}}
																						/>
																					</a>
																				</td>
																				<td width="5"></td>
																			</React.Fragment>
																		)}
																		{data.socialLinkedin && (
																			<React.Fragment>
																				<td>
																					<a
																						href={`https://${data.socialLinkedin}`}
																						color={data.socialColor}
																						style={{
																							display: 'inline-block',
																							padding: '0px',
																							backgroundColor: data.socialColor,
																						}}
																					>
																						<img
																							height="24"
																							src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
																							alt="linkedin"
																							color={data.socialColor}
																							style={{
																								backgroundColor:
																									data.socialColor,
																								maxWidth: '135px',
																								display: 'block',
																							}}
																						/>
																					</a>
																				</td>
																				<td width="5"></td>
																			</React.Fragment>
																		)}
																		{data.socialInstagram && (
																			<React.Fragment>
																				<td>
																					<a
																						href={`https://${data.socialInstagram}`}
																						color={data.socialColor}
																						style={{
																							display: 'inline-block',
																							padding: '0px',
																							backgroundColor: data.socialColor,
																						}}
																					>
																						<img
																							height="24"
																							src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
																							alt="instagram"
																							color={data.socialColor}
																							style={{
																								backgroundColor:
																									data.socialColor,
																								maxWidth: '135px',
																								display: 'block',
																							}}
																						/>
																					</a>
																				</td>
																				<td width="5"></td>
																			</React.Fragment>
																		)}
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												)}
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalSpacing: '-webkit-baseline-middle',
								fontSize: 'medium',
								fontFamily: 'Arial',
								width: '100%',
							}}
						>
							<tbody>
								<tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td
										height="1"
										color={data.accentColor}
										direction="horizontal"
										style={{
											width: '100%',
											borderBottom: `1px solid ${data.accentColor}`,
											borderLeft: 'none',
											display: 'block',
										}}
									></td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
