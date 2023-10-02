function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.introduce = function() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    this.haveBirthday = function() {
      this.age++;
      console.log(`Happy Birthday! Now I am ${this.age} years old.`);
    }
  }
  
  let john = new Person("John Doe", 30);
  john.introduce(); // Output: Hi, my name is John Doe and I am 30 years old.
  
  john.haveBirthday(); // Output: Happy Birthday! Now I am 31 years old.
  john.introduce(); // Output: Hi, my name is John Doe and I am 31 years old.
  