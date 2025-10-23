function laSoChan(n) {
    return n % 2 == 0;
}
function laSoLe(n) {
    return n % 2 != 0;
}
function laSoDuong(n) {
    if (n>0){return true}
        else {return false}
    
}
function laSoAm(n) {
    if(n<0) {return true}
    else {return false}
}
console.log(laSoChan(4));      
console.log(laSoLe(7));        
console.log(laSoDuong(10));    
console.log(laSoAm(-5));       
