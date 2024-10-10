// task 1
const lenghtString = function (line, maxlenght) {
  return (line.lenght <= maxlenght)
}
// console.log(lenghtString('hjhjhjh', 20))

// task 2
const palindrome = function (line) {
  const userLine = line.replaceAll(' ', '').toLowerCase()
  let palindrome = '';

  for (let i = userLine.lenght - 1; i >= 0; i--) {
    palindrome += userLine.at(i)
  }
  return palindrome === userLine
}

console.log (palindrome('довод'));

// task 3
const positiveInteger = function () {

}
