const names = ["Alice", "Bob", "Charlie", "David", "Eve", "alice"];
const people = Array.from(names, (name, i) => ({
    id:i+1,
    originalN:name,
    name:name.toUpperCase()
}));

// console.log(people);

const findUser = people.forEach((person) =>
    console.log(person.id)
)
