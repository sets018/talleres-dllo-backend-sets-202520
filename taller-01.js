function punto_1(c){
    return (c * 9/5) + 32 
}

function punto_2(a, b, c, sw){
    root = Math.sqrt(b**2 - 4*a*c)
    if (sw === 0) {
        up = -b - root
    } else if (sw === 1) {
        up = -b + root
    }
    return up / 2*a
}

function punto_3(num){
    let res = ""

    if (num % 2 === 0) {
        res = true
    } else{
        res = false
    }    
    return res
}

function punto_4(num){
    let res = ""

    if (num === 0) {
        res = "par"
    } else if (num === 1) {
        res = "impar"
    } else if (num === 2) {
        res = "par"
    }  
      else if (num === 3) {
        res = "impar"
    }   
      else if (num === 4) {
        res = "par"
    }     
      else if (num === 5) {
        res = "impar"
    }   
     else if (num === 6) {
        res = "par"
    }  
         else if (num === 7) {
        res = "impar"
    }  
         else if (num === 8) {
        res = "par"
    }  
         else if (num === 9) {
        res = "impar"
    }  
         else if (num === 10) {
        res = "par"
    }  
    return res
}

console.log(punto_1(40))
console.log(punto_2(1,5,4,1))
console.log(punto_3(5))
console.log(punto_4(4))