//const to connect to html elements//

const charRange = document.querySelector('#charAmtRange');
const charAmtElement = document.querySelector('#charAmtNumber');
const uppercaseElement = document.querySelector('#uppercaseId');
const numberElement = document.querySelector('#numberId');
const symbolElement = document.querySelector('#symId');
const form = document.querySelector('#formId');
const passwordDisplay = document.getElementById('passDisplay');



//function for character array//
function arrayFromLowToHigh(low, high) {
	const array = [];
	for (let i = low; i <= high; i++) {
		array.push(i);
	}
	return array;
}

const code_uppercase = arrayFromLowToHigh(65, 90)
const code_lowercase = arrayFromLowToHigh(97, 122)
const code_number = arrayFromLowToHigh(48, 57)
const code_symbol = arrayFromLowToHigh(33, 47)
	.concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96))
	.concat(arrayFromLowToHigh(123, 126))



function pWordGenerator(charAmt, uppercaseInclude, numberInclude, symbol_include) {

	let passWordIncludes = code_lowercase;

	if (uppercaseInclude) passWordIncludes = passWordIncludes.concat(code_uppercase);
	if (numberInclude) passWordIncludes = passWordIncludes.concat(code_number);
	if (symbol_include) passWordIncludes = passWordIncludes.concat(code_symbol);

	const passwordHere = [];

	for (let i = 0; i < charAmt; i++) {
		const passwordBuild = passWordIncludes[Math.floor(Math.random() *
			passWordIncludes.length)]
		passwordHere.push(String.fromCharCode(passwordBuild));
	}

	return passwordHere.join(' ');
}


function syncAmtRange(event) {
	const value = event.target.value;

	charAmtElement.value = value;
	charRange.value = value;
}


charAmtElement.addEventListener('input', syncAmtRange)
charRange.addEventListener('input', syncAmtRange)


form.addEventListener('submit', event => {
	event.preventDefault()
	const charAmt = charAmtElement.value
	const uppercaseInclude = uppercaseElement.checked
	const numberInclude = numberElement.checked
	const symbol_include = symbolElement.checked
	const password = pWordGenerator(charAmt, uppercaseInclude, numberInclude, symbol_include)
	passwordDisplay.innerText = password

})







