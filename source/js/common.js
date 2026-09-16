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

/**
 * 몇일 전 후를 일정한 포맷으로 출력하는 함수
 * @param {*} format 은 default parameter 사용
 * @returns
 */
const getIntervalDateFormat2 = (day, format = "YYYY.MM.DD") => {
  let now = new Date();
  let dayMilliSec = 24 * 60 * 60 * 1000; // 하루
  let IntervalDate = now.getTime() + day * dayMilliSec;
  let d = new Date(IntervalDate);
  let year = d.getFullYear().toString();
  let month = (d.getMonth() + 1).toString().padStart(2, 0);
  let day2 = d.getDate().toString().padStart(2, 0);

  return format.replace("YYYY", year).replace("MM", month).replace("DD", day2);
};

/**
 * 정수를 랜덤하게 출력
 * @param {포함하는 가장 작은 수} min
 * @param {포함하는 가장 큰 수} max
 * @returns
 */

function getRandomInteger(min, max) {
  return Math.trunc(Math.random() * (max - min + 1) + min);
}
