const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const people = Array.from(names, (name, i) => ({
    id:i+1,
    originalN:name,
    name:name.toUpperCase()
}));

console.log(people);
