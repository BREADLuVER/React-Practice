
function createArray(end) {
    return Array.from({ length: end-0+1 }, (_, i) => 0+i);
}

const num = createArray(10)
console.log(num)

const even = num.filter(n => n%2 === 0)
console.log(even)


const names = ["Alice", "Bob", "Charlie", "David", "Eve", "alice"];
const people = Array.from(names, (name, i) => ({
    id:i+1,
    originalN:name,
    name:name.toUpperCase()
}));

console.log(people);

const filteredP = people.filter(person => person.name==="ALICE").map(person => person.id)
console.log(filteredP)