/*const person ={
  name: 'Alex Martin',
  age: 35
}
console.log(person.name);*/

const person = {
  name: 'Alex martin',
  age: 35,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}