let x = prompt('введи число', '')
let n = prompt('введи степень', '')

if (n < 0) {
    alert('степень должна быть больше нуля')
}

const number =(x, n) => {
    return x ** n;
}

let result = x ** n
alert(result)
number(x, n);