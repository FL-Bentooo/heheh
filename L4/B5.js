let numbers = [5, 2, 8, 1, 9, 3, 7];
function inMang(n) {
    for (let i = 0; i < n.length; i++) {
        console.log(n[i]);
    }
}
function demPhanTu(n) {
    return n.length;
}

function tinhTongMang(n) {
    let tong = 0;
    for (let i = 0; i < n.length; i++) {
        tong += n[i];
    }
    return tong;
}
function timMaxTrongMang(n) {
    let max = n[0];
    for (let i = 1; i < n.length; i++) {
        if (n[i] > max) {
            max = n[i];
        }
    }
    return max;
}
function timMinTrongMang(n) {
    let min = n[0];
    for (let i = 1; i < n.length; i++) {
        if (n[i] < min) {
            min = n[i];
        }
    }
    return min;
}
inMang(numbers);
console.log(demPhanTu(numbers));           
console.log(tinhTongMang(numbers));        
console.log(timMaxTrongMang(numbers));     
console.log(timMinTrongMang(numbers));     
