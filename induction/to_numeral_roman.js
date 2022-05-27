
const ROMAN_NUMERAL_DICTIONARY = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
};
module.exports = function to_numeral_roman(numeral = 0) {
    let result = "";
    if (numeral <= 0) return result;
    const numerals_in_roman_desc = Object.keys(ROMAN_NUMERAL_DICTIONARY).sort((a, b) => b - a);
    numerals_in_roman_desc.forEach((numeral_key) => {
        if (numeral >= numeral_key) {
            const times = Math.floor(numeral / numeral_key);
            result += ROMAN_NUMERAL_DICTIONARY[numeral_key].repeat(
                times
            );
            numeral -= numeral_key * times;
            return;
        }
    });
    return result;
}