export interface copyToClipboardProps {
	id: string,
}

export function copyToClipboard(Props: copyToClipboardProps) {
	const targetId = document.getElementById(Props.id)
	if (targetId !== null) {

		const markup = targetId.innerHTML
		const tempInput = document.createElement('input')
		const body = document.getElementsByTagName('body')[0]
		body.appendChild(tempInput)
		tempInput.setAttribute('value', markup)
		tempInput.select()
		document.execCommand('copy')
		body.removeChild(tempInput)
	}
}
