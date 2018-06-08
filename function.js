/*

배열에서 랜덤값 출력하기

*/
function RanDom(arr){
  var max = arr.length - 1;
  var min = 0;
  var RandVal = Math.random() * (max- min) + min;
  return "랜덤값: " + Math.floor(RandVal);
}
