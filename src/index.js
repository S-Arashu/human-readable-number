module.exports = function toReadable (number) {
    const numTillTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const tens = ['', '', 'twenty', 'thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number < 20){
        return numTillTwenty[number];
    } else if (number < 100 && String(number).endsWith('0')){
        return tens[+String(number)[0]];
    } else if (number < 100){
        return `${tens[+String(number)[0]]} ${numTillTwenty[+String(number)[1]]}`;
    } else if (number < 1000 && String(number).endsWith('00')){
        return `${numTillTwenty[+String(number)[0]]} hundred`;
    } else if (number < 1000 && (String(number)[1] === '1' || String(number)[1] === '0')){
        return (numTillTwenty[+String(number)[0]] + ' hundred ' + (numTillTwenty[+(String(number)[1] + String(number)[2])]));
    } else if (number < 1000 && String(number).endsWith('0')){
        return `${numTillTwenty[+String(number)[0]]} hundred ${tens[+String(number)[1]]}`;
    } else if (number < 1000){
        return `${numTillTwenty[+String(number)[0]]} hundred ${tens[+String(number)[1]]} ${numTillTwenty[+String(number)[2]]}`;
    };
}
