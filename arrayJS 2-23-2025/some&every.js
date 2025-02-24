const names = ["Alice", "Bob", "Charlie", "David", "Eve", "alice"];
const people = Array.from(names, (name, i) => ({
    id:i+1,
    originalN:name,
    name:name.toUpperCase()
}));

const someAlice = people.some((person) => {
    return person.originalN == "Alice"
})

console.log(someAlice)

const everyAlice = people.every((person) => {
    return person.originalN == "Alice"
})

console.log(everyAlice)