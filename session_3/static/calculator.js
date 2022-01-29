function calculator(){
    console.log("Calculator Function");
    let num1 = Number(prompt('Number 1:'));
    let num2 = Number(prompt('Number 2:'));
    let resultList = [];
    let symbolList = ['+', '-', '*', '/']
    resultList.push(num1 + num2);
    resultList.push(num1 - num2);
    resultList.push(num1 * num2);
    resultList.push(num1 / num2);
    for(x = 0; x<resultList.length; x++){
        document.getElementById('results').innerHTML += `<p>${num1} ${symbolList[x]} ${num2} = ${resultList[x]}</p>`
        console.log(`${symbolList[x]} ${resultList[x]}`)
    };
}
