module.exports = function toReadable(number) {
  const numTillTwenty = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) {
    return numTillTwenty[number];
  }
  if (number < 100 && String(number).endsWith('0')) {
    return tens[+String(number)[0]];
  }
  if (number < 100) {
    return `${tens[+String(number)[0]]} ${numTillTwenty[+String(number)[1]]}`;
  }
  if (number < 1000 && String(number).endsWith('00')) {
    return `${numTillTwenty[+String(number)[0]]} hundred`;
  }
  if (
    number < 1000 &&
    (String(number)[1] === '1' || String(number)[1] === '0')
  ) {
    return `${numTillTwenty[+String(number)[0]]} hundred ${
      numTillTwenty[+(String(number)[1] + String(number)[2])]
    }`;
  }
  if (number < 1000 && String(number).endsWith('0')) {
    return `${numTillTwenty[+String(number)[0]]} hundred ${tens[+String(number)[1]]}`;
  }
  if (number < 1000) {
    return `${numTillTwenty[+String(number)[0]]} hundred ${tens[+String(number)[1]]} ${numTillTwenty[+String(number)[2]]}`;
  }
  return `Wrong value`;
};
