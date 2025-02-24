const names = ["Alice", "Bob", "Charlie", "David", "Eve", "alice"];
const people = Array.from(names, (name, i) => ({
    id:i+1,
    originalN:name,
    name:name.toUpperCase()
}));

const checkAlice = people.some((person) => {
    return person.originalN == "aLice"
})

console.log(checkAlice)