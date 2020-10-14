const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const decades = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = toReadable = num => {
  if (num < 100) {
    return lessThanHundred(num);
  } else if (num % 100 === 0) {
      return numbers[num / 100] + ' hundred';
  } else {
      return numbers[Math.floor(num / 100)] + ' hundred ' + lessThanHundred(num % 100);
    }
  }
  lessThanHundred  = num => {
    if (num < 20) {
      return numbers[num];
    } if (num % 10 === 0) {
        return decades[num / 10];
    } else {
        return decades[Math.floor(num / 10)]+ ' ' + numbers[num % 10];
      }
    }


