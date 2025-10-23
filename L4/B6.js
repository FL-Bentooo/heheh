let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a) Tìm tất cả các số chẵn trong mảng
function timSoChan(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            a.push(arr[i]);
        }
    }
    return a;
}

// b) Tìm tất cả số lẻ trong mảng
function timSoLe(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            a.push(arr[i]);
        }
    }
    return a;
}

// c) Tìm tất cả số lớn hơn giá trị so sánh
function timSoLonHon(arr, giaTriSoSanh) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > giaTriSoSanh) {
            a.push(arr[i]);
        } 
    }
    return a;
}

// d) Kiểm tra mảng có chứa số nào đó không
function kiemTraChuaSo(arr, so) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === so) {
            return true;
        }
    }
    return false;
}

// Test
console.log(timSoChan(numbers));           // [2, 4, 6, 8, 10]
console.log(timSoLe(numbers));             // [1, 3, 5, 7, 9]
console.log(timSoLonHon(numbers, 5));      // [6, 7, 8, 9, 10]
console.log(kiemTraChuaSo(numbers, 7));    // true
