// a) Tính trung bình cộng 3 số
function tinhTrungBinh(a, b, c) {
  return (a + b + c) / 3;
}
console.log(tinhTrungBinh(6, 8, 10));

// b) Kiểm tra số chẵn/lẻ
function kiemTraChanLe(n) {
  if (n % 2 == 0)
    return "Số chẵn";
  else
    return "Số lẻ";
}
console.log(kiemTraChanLe(4)); 
console.log(kiemTraChanLe(7)); 

// c) Tính giai thừa
function tinhGiaiThua(n) {
  let a = 1;
  for (let i = 1; i <= n; i++)
    a = a * i;
  return a;
}
console.log(tinhGiaiThua(5)); 
console.log(tinhGiaiThua(3)); 
