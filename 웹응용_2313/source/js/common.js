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
