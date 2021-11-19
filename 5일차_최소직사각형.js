function solution(sizes) {
  let bigArr = [];
  let sBigArr = [];
  sizes.map((item) => {
    let big = item[0] > item[1] ? item[0] : item[1];
    bigArr.push(big);
    let small = item[0] > item[1] ? item[1] : item[0];
    sBigArr.push(small);
  });
  let bigest = Math.max(...bigArr);
  let secondBig = Math.max(...sBigArr);

  var answer = bigest * secondBig;
  return answer;
}
