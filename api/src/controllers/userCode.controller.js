const SPECIAL_CHARS = '!@#$%^&_+|[]./=-';
const CHARS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';

export function generateUserCode() {
	const id = [];
	const length = 12;

	for (let i = 0; i < length - 1; i++) {
		if (i % 2 === 0) {
			id.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
		} else {
			id.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]);
		}
	}
	id.push(SPECIAL_CHARS[Math.floor(Math.random() * SPECIAL_CHARS.length)]);

	return id.join('');
}

export function isUserCodeValid(code = "") {
	if (code.length < 12) return false;
	let specialCharsIncludes = "",
		charsIncludes = "",
		numbersIncludes = "";

	for (let i = 0; i < code.length; i++) {
		if (SPECIAL_CHARS.includes(code[i])) specialCharsIncludes += code[i];
		if (CHARS.includes(code[i])) charsIncludes += code[i];
		if (NUMBERS.includes(code[i])) numbersIncludes += code[i];
	}

	if (specialCharsIncludes.length === 1 && charsIncludes.length >= 5 && numbersIncludes.length >= 5) return true;
	return false;
}