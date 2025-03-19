# JavaScript has two different types of values:

1. Primitive values
2. Reference values

- Primitive values are atomic pieces of data.
- Reference values are objects that might consist of multiple values.

# Stack and heap memory

When you declare variables, the JavaScript engine allocates the memory for them on two memory locations: stack and heap.

Static data is the data whose size is fixed at compile time. Static data includes:

Primitive values `(null, undefined, boolean, number, string, symbol, and BigInt)`

Reference values that refer to objects.

Since static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space to the static data and stores it on the stack.

Unlike the stack, JavaScript stores objects (and functions) on the heap. The JavaScript engine doesn’t allocate a fixed amount of memory for these objects. Instead, it’ll allocate more space as needed.

# JavaScript Engine and Memory Management:

- The JavaScript engine, like V8 (used in Chrome and Node.js), is a program that runs JavaScript code.

- When it runs, it uses your computer's RAM to allocate and manage memory for various types of data (e.g., variables, objects, and functions). It decides what goes into the stack (static memory) and what goes into the heap (dynamic memory).

- The stack is used for storing static, short-lived, and small data like function calls, primitive values, and references. It's fast and organized.

- The heap is for larger and dynamic data like objects and arrays, which may grow in size during runtime.
---

# Array Methods with Explanation:
---

#### 1. Adding/Removing Elements:
`push()`, `pop()`, `unshift()`, `shift()`

#### 2. Iterating Over Arrays:
`forEach()`, `map()`, `filter()`, `reduce()`

#### 3. Checking/Modifying Arrays:
`includes()`, `indexOf()`, `splice()`, `slice()`

---

1. **forEach()**

- **Purpose**: Executes a provided function for each element in the array.
- **Return Value**: undefined. It doesn’t create a new array but modifies the original array (if needed).
- **Use Case**: When you need to iterate over an array to perform a side effect (e.g., logging, updating, etc.).
```javascript
const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num * 2));
// Output: 2, 4, 6
```
2. **map()**
- **Purpose**: Creates a new array by applying a provided function to each element in the array.
- **Return Value**: A new array containing the transformed elements.
- **Use Case**: When you want to transform or manipulate data and return the modified version.
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
```
3. **filter()**
- **Purpose**: Creates a new array with all elements that pass a provided test (i.e., a condition).
- **Return Value**: A new array containing the elements that satisfy the condition.
- **Use Case**: When you need to filter out specific elements from an array.
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
```
4. **reduce()**
- **Purpose**: Reduces the array to a single value by applying a provided function that accumulates results.
- **Return Value**: A single value (e.g., sum, product, object, etc.).
- **Use Case**: When you need to combine array elements into a single output.
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum); // 10
```
---

#### Key Differences:
| Method	| Modifies Original Array?|	Creates New Array? | Purpose | Return Value |
|-----------|-------------------------|--------------------|---------|----------------|
| forEach()	| No | No	| Perform side effects on each element|	undefined
| map()	| No |	Yes | Transform elements | New array with transformed elements
|filter()	|No	|Yes	|Select elements based on a condition	| New array with filtered elements
|reduce()	|No	|No	|Reduce array to a single value	| Single accumulated value

#### When to Use Which?
- **forEach():** When you need to perform an action on each element, like logging or modifying an external variable.
- **map():** When you need to transform all elements of an array into a new array.
- **filter():** When you want to extract a subset of elements based on a condition.
- **reduce():** When you want to aggregate array values into a single value, like calculating a sum, average, or building an object.

---
## Array Destructuring:
---
Extract values from an array into variables.

```javascript
const [first, second] = fruits;
console.log(first); // "Apple"
```

## Spreading and Merging Arrays:
---
Use the spread operator `(...)` to copy or merge arrays.

```javascript
const moreFruits = [...fruits, "Durian"];
```

## Immutability
---
React encourages immutable updates. Use methods like `map()`, `filter()`, or the spread operator to avoid mutating the original array.

```javascript
const updatedTasks = tasks.map((task) =>
  task.id === targetId ? { ...task, completed: true } : task
);
```
---

## 1. What is an Object?

An object in JavaScript is a collection of key-value pairs, where each key is a string (property name) and each value can be any data type (string, number, array, function, etc.).

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false
};
console.log(person.name); // Output: "John"
console.log(person["age"]); // Output: 30
```

### 2. Object Methods
Objects can contain functions (methods).

#### Example: Object with a Method
```javascript
const person = {
  name: "David",
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};
console.log(person.greet()); // Output: "Hello, my name is David"
```

### 3. Object Destructuring (Important for React)
Destructuring allows extracting values from an object.

#### Example: Destructuring an Object
```javascript
const user = { name: "Emily", age: 22 };
const { name, age } = user;
console.log(name, age); // Output: Emily 22
```

### 4. Object Spread Operator (...)
Used for copying or updating objects.

#### Example: Updating an Object
```javascript
const user = { name: "John", age: 25 };
const updatedUser = { ...user, age: 26 }; // Keeps all properties, updates 'age'
console.log(updatedUser); // { name: "John", age: 26 }
```

### 5. Objects Inside Arrays (Mapping Over Data)
React often deals with arrays of objects, such as lists.

#### Example: Rendering List in React
```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const UserList = () => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```
### 6. Nested Objects & Optional Chaining (?.)
If an object contains nested properties, you may use optional chaining (?.) to avoid errors.

#### Example: Accessing Nested Properties
```javascript
const user = {
  name: "Ethan",
  address: { city: "New York", zip: "10001" }
};
console.log(user.address.city); // "New York"

// Using Optional Chaining
console.log(user.address?.zip); // "10001"
console.log(user.address?.country); // undefined (no error)
```
### 7. Object.keys(), Object.values(), Object.entries()
These methods help to iterate over an object's keys, values, and entries.

#### Example: Looping Over an Object
```javascript
const user = { name: "Lily", age: 24 };

// Get keys
console.log(Object.keys(user)); // ["name", "age"]

// Get values
console.log(Object.values(user)); // ["Lily", 24]

// Get key-value pairs
console.log(Object.entries(user)); // [["name", "Lily"], ["age", 24]]
```
### 9. Objects & JSON (`JSON.stringify()` and `JSON.parse()`)
React often works with JSON data from APIs.

#### Example: Converting Object to JSON
```javascript
const user = { name: "Ryan", age: 27 };
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Ryan","age":27}'

// Converting JSON string back to object
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Ryan"
```

### 10. Objects in React (State & Props)
In React, objects are commonly used for **state** and **props**.
#### Example: Object as State
```javascript
const App = () => {
  const [user, setUser] = React.useState({ name: "Alice", age: 25 });

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
};
```

### Why Objects Are Important in React?
1. State Management – React’s `useState()` often holds object data.
2. Props Handling – Components receive props as objects.
3. List Rendering – React maps over arrays of objects.
4. API Data Handling – Most APIs return JSON, which is structured as objects.
5. Event Handling – React’s events often provide objects with useful information.

---

### `Object.freeze()` vs. `Object.seal()` vs. `Object.preventExtensions()`

#### 1. `Object.freeze()`
- Prevents **adding**, **deleting**, or **modifying** properties.
- Makes the object **fully immutable** (including values of properties if they are primitive).
- Does **NOT** allow reassigning existing property values.
```javascript
const obj = { name: "John", age: 30 };

Object.freeze(obj);

obj.age = 40; // ❌ No effect (modification not allowed)
obj.city = "New York"; // ❌ No effect (adding new properties not allowed)
delete obj.name; // ❌ No effect (deletion not allowed)

console.log(obj); // { name: "John", age: 30 }

console.log(Object.isFrozen(obj)); // ✅ true
```
#### 2. `Object.seal()`
- Prevents **adding** or **deleting** properties but **allows modifying** existing property values.
- Properties remain **mutable**, but no new properties can be added.
```javascript
const user = { name: "Alice", age: 25 };

Object.seal(user);

user.age = 30; // ✅ Allowed (modification is allowed)
user.city = "London"; // ❌ Not allowed (can't add new properties)
delete user.name; // ❌ Not allowed (can't delete properties)

console.log(user); // { name: "Alice", age: 30 }

console.log(Object.isSealed(user)); // ✅ true
```
#### 3. `Object.preventExtensions()`
- Prevents **adding** new properties but **allows modifying** and **deleting** existing properties.
- Less restrictive than `Object.seal()` and `Object.freeze()`.
```javascript
const car = { brand: "Toyota", model: "Corolla" };

Object.preventExtensions(car);

car.year = 2024; // ❌ Not allowed (can't add new properties)
car.model = "Camry"; // ✅ Allowed (modification allowed)
delete car.brand; // ✅ Allowed (deletion allowed)

console.log(car); // { model: "Camry" }

console.log(Object.isExtensible(car)); // ❌ false
```
| Feature	| `Object.preventExtensions()` |	`Object.seal()`	| `Object.freeze()` |
----------|------------------------------|------------------|-------------------|
Add new properties |	❌ No	| ❌ No | 	❌ No |
Delete properties |	✅ Yes	| ❌ No |	❌ No |
Modify existing values |	✅ Yes |	✅ Yes |	❌ No |
Check method |	`Object.isExtensible()` |	`Object.isSealed()` |	`Object.isFrozen()` |

#### When to Use?
- ✅ `Object.freeze()` → When you want to make an object completely immutable (constants, config objects).
- ✅ `Object.seal()` → When you want to prevent structural changes but allow value updates (user profiles).
- ✅ `Object.preventExtensions()` → When you want to allow modification/deletion but prevent new properties.


```javascript
const log = console.log;
// function Person(name){
//   this.name = name;
// }

// Person.prototype.getName = function(){
//   return this.name;
// }

// let john = new Person("John Doe"); //Instance / example
// let jane = new Person("Jane Doe"); //Instance / example

// console.log( john.getName === jane.getName  )

// console.log( john instanceof Object );
// console.log( jane instanceof Object );

//Class :: OOP
//PRIVATE PROPERTIES

// class Person{
//   #name; //Private
//   #age; //Private

//   constructor(name, age){
//     this.#name = name;
//     this.#age = age;
//   }

//   //Getter Method
//   get name(){
//     return this.#name.toUpperCase();
//   }

//   get age(){
//     return this.#age;
//   }

//   //Setter Method
//   set name(newName){
//     if(newName.length > 0){
//       this.#name = newName;
//     }else{
//       log("name cannot be empty!")
//     }
//   }

//   set age(newAge){
//     if(newAge > 0){
//       this.#age = newAge;
//     }else{
//       log("Age must be a valid positive number!")
//     }
//   }
// }

// const person1 = new Person('john doe', 55);
// log(person1.name);
// log(person1.age); //getter method

// person1.name = "Jane doe";
// person1.age = 32;

// log(person1.name);
// log(person1.age);


// class User{
  
//   #password; //private property

//   constructor(username, password){
//     this.username = username;
//     this.#password = password;
//   }

//   get password(){
//     return "Access Denied";
//   }

//   checkPassword(inputPassword){
//     return inputPassword === this.#password ? "Login Successful" : "Wrong Password!";
//   }

// }

// let user1 = new User("Bob Smith", "pass123");

// log(user1.checkPassword("pass123"))

/*
class BankAccount{

  #balance; //Private Property

  constructor(initialBalance){
    this.#balance = initialBalance;
  }

  //Get Balance
  get balance(){
    return `Your balance is $${this.#balance}`;
  }

  //Deposit
  deposit(amount){
    if(amount > 0){
      this.#balance += amount;
      log(`Deposited $${amount}. New balance: $${this.#balance}`)
    }else{
      log(`Deposit amount must be positive!`);
    }
  }

  //Withdrawn
  withdraw(amount){
    if(amount > 0 && amount <= this.#balance){
      this.#balance -= amount;
      log(`Withdrawn $${amount}. New balanace is: $${this.#balance}`);
    }else{
      log(`Invalid withdwawn amount!`);
    }
  }
}

const myAccount = new BankAccount(1000); //Instance of BankAccount

log(myAccount.balance);

myAccount.deposit(500);

log(myAccount.balance);

myAccount.withdraw(200);

log(myAccount.balance);

log(typeof BankAccount);

log(typeof myAccount);
*/

//Singleton Pattern
/*
let app = new class{
  constructor(name){
    this.name = name;
  }

  start(){
    log(`Starting the ${this.name}`);
  }
}("Awesome App")

app.start()
*/



//Configuration Manager

// let config = new class{
//   constructor(){
//     this.settings = { theme: "dark",  language: "en" }
//   }

//   getSetting(key){
//     return this.settings[key];
//   }
// }()

// log(config.getSetting("theme"))


//Database Connection
/*
let database = new class{
  constructor(){
    log(`Database Connected!`)
  }
}
*/

//Logging System
/*
let logger = new class{
  log(message){
    console.log(`[LOG]: ${message}`)
  }
}()

logger.log("User logged in!")
logger.log("User logged out!")
*/

// Parent Class
class Employee{
  constructor(name, salary){
    this.name = name;
    this.salary = salary;
  }

  work(){
    log(`${this.name} is working...`);
  }

  getSalary(){
    log(`${this.name} earns $${this.salary} per year`);
  }
}

// Child Class
class Manager extends Employee{
  constructor(name, salary, teamSize){
    super(name, salary);
    this.teamSize = teamSize;
  }

  manageTeam(){
    log(`${this.name} is managing a team of ${this.teamSize} people`)
  }
}


let emp1 = new Employee("John Doe", 50000);
emp1.work()
emp1.getSalary()

let mngr1 = new Manager("Bob", 70000, 50);
mngr1.work()
mngr1.getSalary()
mngr1.manageTeam()
```