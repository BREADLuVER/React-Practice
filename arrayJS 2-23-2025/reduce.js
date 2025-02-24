const names = ["Alice", "Bob", "Charlie", "David", "Eve", "alice"];
const people = Array.from(names, (name, i) => ({
    id:i+1,
    originalN:name,
    name:name.toUpperCase(),
    cash:20,
}));

const total = people.reduce((cumulative, person) => person.cash + cumulative, 0)

console.log(total)