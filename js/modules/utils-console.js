const log = {
	style: 'color: #ffffff; padding: 5px; font-weight: bold; font-size: 12px;',
	info: (text) => {
		console.log(`%c${`info`}`, `background: blue; ${log.style}`, `${text}`);
	},
	warn: (text) => {
		console.log(`%c${`warn`}`, `background: orange; ${log.style}`, `${text}`);
	},
	success: (text) => {
		console.log(`%c${`success`}`, `background: green; ${log.style}`, `${text}`);
	},
	error: (text) => {
		console.log(`%c${`error`}`, `background: red; ${log.style}`, `${text}`);
	},
}


export default log