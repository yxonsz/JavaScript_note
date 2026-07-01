/**
 * 두 수를 더해서 결과를 리턴하는 함수
 * @param {*} n1 : 더하고자 하는 수1
 * @param {*} n2 : 더하고자 하는 수2
 * @returns
 */
function sum(n1, n2) {
  return n1 + n2;
}
// const sum = (n1, n2) => n1 + n2;

/**
 * 부가세를 계산하는 함수
 * @param {*} productPrice : 물품가격
 * @returns
 */
function taxAmount(productPrice) {
  let tax = 0.1;
  return tax * productPrice;
}
/*
const taxAmount = (productPrice) => {
  let tax = 0.1;
  return tax * productPrice;
};
*/

// const getIntervalDate = (day) => {
//   let now = new Date();

//   let year = now.getFullYear();
//   let month = now.getMonth() + 1;
//   let date = now.getDate();
//   let dayName = now.getDay();
//   let hour = now.getHours();
//   let minute = now.getMinutes();
//   let second = now.getSeconds();
//   let millises = now.getMilliseconds();

//   let dayNameArr = [
//     "일요일",
//     "월요일",
//     "화요일",
//     "수요일",
//     "목요일",
//     "금요일",
//     "토요일",
//   ];

//   let dayMilliSec = 24 * 60 * 60 * 1000; // 하루 밀리초
//   let IntervalDate = now.getTime() + day * dayMilliSec;
//   return new Date(IntervalDate);

/**
 * 오늘을 기준으로 몇칠 전, 후를 구하는 함수
 * @param {*} day : 전인 경우 음수, 후인 경우 양수 전달
 * @returns
 */
const getIntervalDate = (day) => {
  let today = new Date();
  let dayMilliSec = 24 * 60 * 60 * 1000;

  let IntervalDate = today.getTime() + day * dayMilliSec;

  return new Date(IntervalDate);
};
