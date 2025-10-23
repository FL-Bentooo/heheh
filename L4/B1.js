function tinhTong(a, b) {
    return a + b;
}
function tinhHieu(a, b) {
    return a - b;
}
function tinhTich(a, b) {
    return a * b;
}
function tinhThuong(a, b) {
    if (b == 0) {
        return "Error";
    }
    return a / b;
}
console.log(tinhTong(5, 3));     
console.log(tinhHieu(10, 4)); 
console.log(tinhTich(7, 6));     
console.log(tinhThuong(20, 4));   
console.log(tinhThuong(10, 0));   
