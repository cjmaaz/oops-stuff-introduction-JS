// Constructor Function
function Student(name, age, branch = 'ISE') {
  this.name = name;
  this.age = age;
  this.branch = branch;
}

Student.prototype.graduated = false;

let s1 = new Student('Adam', 19);
let s2 = new Student('John', 21, 'CSE');
console.log(s1.graduated);
console.log(s2.graduated);

// Factory Function
function person(name) {
  return {
    name,
    talk() {
      return `Hi, I am ${this.name}`;
    },
  };
}

person.prototype.philosopher = true; // Won't Work

let person1 = person('Confucius');
let person2 = person('Voltaire');

console.log(person1.talk());
console.log(person1.philosopher); //undefined

console.log(person2.talk());
console.log(person2.philosopher); //undefined

// Conclusion
console.log(s1);
console.log(person1);
