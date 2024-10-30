// Define the Person type with optional middleName
type Person = {
    firstName: string;
    lastName: string;
    middleName?: string;
  };
  
  // Define an interface that extends Person with additional properties
  interface DetailedPerson extends Person {
    age: number;
    email: string;
  }
  
  // Create a class that utilizes the DetailedPerson type
  class User implements DetailedPerson {
    firstName: string;
    lastName: string;
    middleName?: string;
    age: number;
    email: string;
  
    constructor(firstName: string, lastName: string, age: number, email: string, middleName?: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.middleName = middleName;
      this.age = age;
      this.email = email;
    }
  
    // Method to get full name with optional middle name
    getFullName(): string {
      return `${this.firstName} ${this.middleName ? this.middleName + " " : ""}${this.lastName}`;
    }
  }
  
  const user = new User("Rinta", "Setyo", 29, "email.email@example.com", "Nugroho");
  console.log(user.getFullName()); // Output
  