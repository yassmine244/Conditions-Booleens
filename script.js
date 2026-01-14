

//1
function returnTrue() {
  return true;
}
//2
function returnFalse() {
  return false;
}
//3
function isEven(number) {
  return number % 2 === 0;
}
//4
function isOdd(number) {
  return number % 2 !== 0;
}
//5
function isGreaterThan10(number) {
  return number > 10;
}
//6
function isLessThan30(number) {
  return number < 30;
}
//7
function isEqualTo10(number) {
  return number === 10;
}
//8
function isGreaterOrEqualTo15(number) {
  return number >= 15;
}
//8
function isLessOrEqualTo8(num1) {
  return num1 <= 8;
}
//9
function isLessThan(num1, num2) {
  return num1 < num2;
}
//10
function isEqualTo(num1, num2) {
  return num1 === num2;
}
//11
function isOldEnoughToDrive(age) {
  return age >= 18;
}
//12
function isValidPassword(password) {
  return password.length >= 8;
}
//13
function longerString(string1, string2) {
  if (string1.length > string2.length) return string1;
  else if (string2.length > string1.length) return string2;
  else return "both";
}
//14
function opposite(boolean) {
  return !boolean;
}
//15
function rectAreaGreaterThan50(length, width) {
  return length * width >= 50;
}
//16
function budgetStatus(number) {
  if (number > 250) return "over budget";
  else return "under budget";
}