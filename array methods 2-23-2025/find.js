const names = ["Alice", "Bob", "Charlie", "David", "Eve", "alice"];
const people = Array.from(names, (name, i) => ({
    id:i+1,
    originalN:name,
    name:name.toUpperCase()
}));

console.log(people);

const findUser = people.find(person => person.name==="ALICE")
console.log(findUser)

const mapId = [findUser].map(user => user.id)
console.log(mapId)