//Câu 11 (1 điểm): Tìm và sửa 2 lỗi trong code sau
// Hàm tính tổng 2 số
//Lỗi tìm được:
//1. Hàm tinhTong chưa có giá trị trả về (return ...)
//2. Thêm ; vào sau let tong = a+b; và vào sau return tong;
//Code đã sửa:
function tinhTong(a, b) {
    let tong = a + b;
    return tong;
}

let ketQua = tinhTong(5, 3);
console.log(ketQua);




//Câu 12 (1 điểm): Tìm và sửa 2 lỗi trong code sau
// Tìm số lớn nhất trong mảng
//Lỗi tìm được:
//1. Điều kiện vòng lặp sai do i phải bé hơn arr.length
//2. Max = 0 là sai vì nếu dãy âm thì return 0 nên vô lí, đặt max = arr[i]
//Code đã sửa:
function timMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let numbers = [5, 2, 9, 1, 7];
console.log(timMax(numbers));