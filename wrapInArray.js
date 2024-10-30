// Define the generic function with a default parameter
function wrapInArray(item) {
    return item === undefined ? [] : [item];
}
// Advanced version using a class
var ArrayWrapper = /** @class */ (function () {
    function ArrayWrapper(item) {
        this.items = wrapInArray(item);
    }
    // Method to add an item to the array
    ArrayWrapper.prototype.addItem = function (item) {
        this.items.push(item);
    };
    // Method to remove the last item from the array
    ArrayWrapper.prototype.removeLastItem = function () {
        return this.items.pop();
    };
    // Method to get all items in the array
    ArrayWrapper.prototype.getItems = function () {
        return this.items;
    };
    return ArrayWrapper;
}());
// Example usage
var numberWrapper = new ArrayWrapper(10);
numberWrapper.addItem(20);
numberWrapper.addItem(30);
numberWrapper.addItem(40);
console.log(numberWrapper.getItems()); // Output
numberWrapper.removeLastItem();
console.log(numberWrapper.getItems()); // Output
var stringWrapper = new ArrayWrapper();
stringWrapper.addItem("Di");
stringWrapper.addItem("Bimbing");
console.log(stringWrapper.getItems()); // Output
