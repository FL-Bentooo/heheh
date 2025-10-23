let n;
do {
  n = parseInt(prompt("Nhập một số nguyên dương n: "));
} while (isNaN(n) || n <= 0);
let tongchan = 0;
let tongle = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    tongchan += i;
  } else {
    tongle += i;
  }
}
console.log("Tổng các số chẵn từ 1 đến " + n + " là: " + tongchan);
console.log("Tổng các số lẻ từ 1 đến " + n + " là: " + tongle);
