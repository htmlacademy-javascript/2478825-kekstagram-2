// task 1
const checkLengthString = (line, maxlenght) => line.length <= maxlenght;

// console.log(checkLengthString('hjhjhjh', 20))

// task 2
const isPalindrome =  (text) => {
  const normalizedText = text.replaceAll(' ', '').toLowerCase();
  let reversedText = '';

  for (let i = normalizedText.length - 1; i >= 0; i--) {
    reversedText += normalizedText.at(i);
  }
  return normalizedText === reversedText;
};

console.log (isPalindrome('довод'));

// task 3

const cutNumbers = (text) => {
  const currentText = String(text);
  let result = '';
  for (let i = 0; i < currentText.length; i++) {
    if(!Number.isNaN(parseInt(currentText[i], 10))){
      result +=currentText[i]
    }
  }
  return parseInt(result, 10)

}

console.log(cutNumbers('asdasdasd'))
