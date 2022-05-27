
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
module.exports = function to_numeral_roman(numeral = 0, result = "") {
    if (numeral <= 0) {
        return result;
    }
    if (numeral >= 1000) {
        return to_numeral_roman(numeral - 1000, result + ROMAN_NUMERAL_DICTIONARY[1000]);
    }

    if (numeral >= 900) {
        return to_numeral_roman(numeral - 900, result + ROMAN_NUMERAL_DICTIONARY[900]);
    }

    if (numeral >= 500) {
        return to_numeral_roman(numeral - 500, result + ROMAN_NUMERAL_DICTIONARY[500]);
    }

    if (numeral >= 400) {
        return to_numeral_roman(numeral - 400, result + ROMAN_NUMERAL_DICTIONARY[400]);
    }

    if (numeral >= 100) {
        return to_numeral_roman(numeral - 100, result + ROMAN_NUMERAL_DICTIONARY[100]);
    }

    if (numeral >= 90) {
        return to_numeral_roman(numeral - 90, result + ROMAN_NUMERAL_DICTIONARY[90]);
    }

    if (numeral >= 50) {
        return to_numeral_roman(numeral - 50, result + ROMAN_NUMERAL_DICTIONARY[50]);
    }

    if (numeral >= 40) {
        return to_numeral_roman(numeral - 40, result + ROMAN_NUMERAL_DICTIONARY[40]);
    }

    if (numeral >= 10) {
        return to_numeral_roman(numeral - 10, result + ROMAN_NUMERAL_DICTIONARY[10]);
    }

    if (numeral >= 9) {
        return to_numeral_roman(numeral - 9, result + ROMAN_NUMERAL_DICTIONARY[9]);
    }

    if (numeral >= 5) {
        return to_numeral_roman(numeral - 5, result + ROMAN_NUMERAL_DICTIONARY[5]);
    }

    if (numeral >= 4) {
        return to_numeral_roman(numeral - 4, result + ROMAN_NUMERAL_DICTIONARY[4]);
    }

    return to_numeral_roman(numeral - 1, result + ROMAN_NUMERAL_DICTIONARY[1]);
}