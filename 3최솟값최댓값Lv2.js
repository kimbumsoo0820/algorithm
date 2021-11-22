function solution(s) {
  let str = s.split(" ");
  let first = Math.min(...str);
  let last = Math.max(...str);
  let result = first + " " + last;

  var answer = result;
  return answer;
}
