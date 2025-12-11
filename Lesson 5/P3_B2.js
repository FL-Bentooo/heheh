let diem = [7, 8.5, 6, 9, 5.5, 8, 7.5];

// a) Tính tổng điểm
function tinhTongDiem(arr) {
  let a = 0;
  for (let i = 0; i < arr.length; i++)
    a = a + arr[i];
  return a;
}
console.log(tinhTongDiem(diem));

// b) Đếm số điểm giỏi (>= 8)
function demDiemGioi(arr) {
  let b = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] >= 8)
      b++;
  return b;
}
console.log(demDiemGioi(diem));

// c) Sắp xếp tăng dần
function sapXepTangDan(arr) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] > arr[j]) {
        let c = arr[i];
        arr[i] = arr[j];
        arr[j] = c;
      }
  return arr;
}
console.log(sapXepTangDan(diem));
