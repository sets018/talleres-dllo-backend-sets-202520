function findMax(nums_list){
    if (!nums_list){
        return null
    }
    let max = nums_list[0]
    for (let num of nums_list){
        if (num > max){
            max = num
        }
    }
    return max
}

function findMin(nums_list){
    if (!nums_list){
        return null
    }
    let min = nums_list[0]
    for (let num of nums_list){
        if (num < min){
            min = num
        }
    }
    return min
}


function includes(nums_list, target_num){
    if (!nums_list || !target_num){
        return null
    }
    for (let num of nums_list){
        if (num === target_num){
            return true
        }
    }
    return false
}

function sum(nums_list){
    let sum = 0
    if (!nums_list){
        return null
    }
    for (let num of nums_list){
        sum = sum + num
    }
    return sum
}

function missingNumbers(nums_list){
    max = findMax(nums_list)
    min = findMin(nums_list)

    let missingNumbers = []

    do{
        min = min + 1
        if (!includes(nums_list, min)){
            missingNumbers.push(min)
        }
    }while (max !== min)

    return missingNumbers
}

export { findMax, findMin, includes, sum, missingNumbers };
