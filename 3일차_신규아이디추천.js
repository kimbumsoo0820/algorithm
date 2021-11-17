function solution(new_id) {
  //소문자
  new_id = new_id
    .toLowerCase()
    .replace(/[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi, "")
    .replace(/[\.]{2,}/g, ".")
    .replace(/^\./, "")
    .replace(/\.$/, "");
  if (new_id.length === 0) {
    new_id = "a";
  }
  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15).replace(/\.$/, "");
  }
  if (new_id.length <= 2) {
    new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
  }

  console.log(new_id);
  var answer = new_id;
  return answer;
}
