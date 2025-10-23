function aplusb (a,b) {
    return(a+b)
    
}

function Prime(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false; 
    }
    return true; 
} 
console.log(Prime(11))