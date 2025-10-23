const n = 5;
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j;
  }
  console.log(line);
}
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += String.fromCharCode(97 + j);
  }
  for (let j = i - 2; j >= 0; j--) {
    line += String.fromCharCode(97 + j);
  }
  console.log(line);
}
