function convertidorTemp(c){
    return (c * 9/5) + 32 
}

function resolvedor(a, b, c, sw){
    root = Math.sqrt(b**2 - 4*a*c)
    if (sw === 0) {
        up = -b - root
    } else if (sw === 1) {
        up = -b + root
    }
    return up / 2*a
}

function mejorParidad(num){
    let res = ""

    if (num % 2 === 0) {
        res = true
    } else{
        res = false
    }    
    return res
}

function peorParidad(num){
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

export { convertidorTemp, resolvedor, mejorParidad, peorParidad };