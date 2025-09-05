function desglosarString(input_string, type) {
    function check_if_letter(char){
        if (char.toUpperCase() != char.toLowerCase()) {
            return true
        } else {
            return false
        }
    }

    function count(char, type){
        let vocals =["a","e","i","o","u"]

        if (type === "vocales"){
            if (check_if_letter(char) === true && vocals.includes(char)){
                return 1
        }
        } else {
            if (type === "consonantes"){
                if (check_if_letter(char) === true && !vocals.includes(char)){
                    return 1
            }
            }
        }
    }

    let list_input_string = input_string.split("")
    let temp = list_input_string.map(char => count(char, type))
    let type_count = temp.filter(val => val === 1).length
    return type_count 
}

function twoSum(list_nums, num){
    let dict = {}

    for (let i = 0; i < list_nums.length; i++){
        let comp = num - list_nums[i]

        if (dict.hasOwnProperty(comp)){
            return [dict[comp], i]
        }
        dict[list_nums[i]] = i
    }
    return null
}

function conversionRomana(roman_number){
    let roman_dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let num = 0

  for (let i = 0; i < roman_number.length; i++){
    let curr = roman_dict[roman_number[i]]

    let next = roman_dict[roman_number[i + 1]] 

    if ((i + 1 < roman_number.length) && (curr < next)){
        num = num - curr
    } else {
        num = num + curr
    }
  }

  return num
}

function descomposicion(input_string){
    let words = input_string.split(",")

    let target_word = words[0]

    let dict = words.slice(1)

    for (let i = 0; i < dict.length; i++) {
    for (let j = 0; j < dict.length; j++) {
      if (i !== j) {
        if (dict[i] + dict[j] === target_word) {
          return [dict[i], dict[j]]
        }
      }
    }
  }

  return null
}

console.log(desglosarString("murcielagos", "vocales"))
console.log(desglosarString("murcielagos", "consonantes"))
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 4, 2], 6))
console.log(conversionRomana("MCMXCVII"))
console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"))




