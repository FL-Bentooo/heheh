console.log('hello world');
for (let a = 1; a <= 9; a++) {
  console.log("Bảng cửu chương: ",a);
  for (let b = 1; b <= 10; b++) {
    console.log(a, 'x', b ,'=', a*b );
  }
}

function giaithua(a) {
    if (a<0) return "ERROR";
    let b=1
    for (let c=1; c<a; c++) {
        b *= c
    }
    return b
}
console.log(giaithua(10))