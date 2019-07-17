export function copyToClipboard(id) {
	const markup = document.getElementById(id).innerHTML
	const tempInput = document.createElement('input')
	const body = document.getElementsByTagName('body')[0]
	body.appendChild(tempInput)
	tempInput.setAttribute('value', markup)
	tempInput.select()
	document.execCommand('copy')
	body.removeChild(tempInput)
}
