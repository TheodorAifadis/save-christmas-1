
function max(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
        } 
    }
    return max
}

function min(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

function mean(arr) {
    // Ledtråd: Börja med att räkna ut summan av alla element
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i]
    }
    return result / arr.length
}

console.log(min([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ])) 
console.log(max([ 1, 2, 3, 4, 5, 6, 7, 8, 9])) 
console.log(mean([ 1, 2, 3, 4, 5, 6, 7, 8, 9])) // 4.714285714285714