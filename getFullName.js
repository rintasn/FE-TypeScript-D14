// Create a class that utilizes the DetailedPerson type
var User = /** @class */ (function () {
    function User(firstName, lastName, age, email, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.age = age;
        this.email = email;
    }
    // Method to get full name with optional middle name
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.middleName ? this.middleName + " " : "").concat(this.lastName);
    };
    return User;
}());
var user = new User("Rinta", "Setyo", 29, "email.email@example.com", "Nugroho");
console.log(user.getFullName()); // Output
