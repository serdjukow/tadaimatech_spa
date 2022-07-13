const url = '../db/pages.json'
const sendRequest = async () => {	
	const response = await fetch(url)
	const bd = await response.json()
	return bd
}

export default sendRequest