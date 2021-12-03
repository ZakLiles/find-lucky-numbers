// Write your code below this line.
const luckyNumbers = num => {
    let arr = []
    for(i = 1; i <= num; i++){
        do {
            randNum = Math.ceil(Math.random()*10);
            if (!arr.includes(randNum)) {
                arr.push(randNum);
            }
        } while (arr.length<i)
    }
    return arr
}

// console.log(luckyNumbers(10));
