function getInfo(n) {
    if (!Number.isInteger(n) || n < 2 || n > 1000) return "Данные неверны";

    let k = Math.sqrt(n);
    for (let i = 2; i <= k; i++)
        if (n % i === 0) return "не простое число";

    return "простое число";
}

console.log(getInfo(1001));
console.log(getInfo(444));
console.log(getInfo(7));