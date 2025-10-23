
function timMax2So(a, b) {
    let max = a
    if (b > max) max = b;
    return max;
}

function timMax3So(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

function timMin2So(a, b) {
    let min = a
    if (b<min) min = b;
    return min;
}

console.log(timMax2So(5, 8));    
console.log(timMax3So(3, 9, 5)); 
console.log(timMin2So(4, 2));    
