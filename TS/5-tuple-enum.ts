//-Tuple
  const person1: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
    name: 'Alex Martin',
    age: 30,
    hobbies: ['Sports', 'Reading'],
    role: [2, 'Manager'] //Tuple - Fixed 
  };
  
  // person.role.push('admin');
  // person.role[1] = 10;
  // person.role = [0, 'admin', 'user'];
  let favoriteActivities1: string[];
  favoriteActivities1 = ['Sports'];
  
  console.log(person1.name);
  
  for (const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
  }


  //-------------------ENUM-----------------
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };
const person2 = {
  name: 'Alex Martin',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};
let favoriteActivities2: string[];
favoriteActivities2 = ['Sports'];

console.log(person2.name);

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person2.role === Role.AUTHOR) {
  console.log('is author');
}