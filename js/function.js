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

// task 4

// '8:00' - начало рабочего дня  startWork
// '17:30' - конец рабочего дня  endWork
// '14:00' - начало встречи   meetingStart
// 90 - продолжительность встречи в минутах  meetingDiraction

const timeInMinutes = (timeInHour = '') => {
 const [hour, minut] = timeInHour.split(':');
 return hour * 60 + Number(minut);
}

const isMeetInLimit = (startWork, endWork,  meetingStart, meetingDiraction) => {
const startWorkInMinutes = timeInMinutes(startWork);
const endWorkInMinutes = timeInMinutes(endWork);
const meetingStartInMinutes = timeInMinutes(meetingStart);
const meetingendInMinutes = timeInMinutes(meetingStart) + meetingDiraction;

return (meetingStartInMinutes >= startWorkInMinutes && meetingendInMinutes <=  endWorkInMinutes)
}
console.log(isMeetInLimit('08:00', '17:30', '14:00', 90)); //true
console.log(isMeetInLimit('8:0', '10:0', '8:0', 120)); //true
console.log(isMeetInLimit('08:00', '14:30', '14:00', 90)); //false
console.log(isMeetInLimit('14:00', '17:30', '08:0', 90)); //false
console.log(isMeetInLimit('8:00', '17:30', '08:00', 900)); //false









