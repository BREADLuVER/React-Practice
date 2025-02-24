
function createArray(end) {
    return Array.from({ length: end-0+1 }, (_, i) => 0+i);
}

const num = createArray(10)
console.log(num)

const even = num.filter(n => n%2 === 0)
console.log(even)