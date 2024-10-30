// Define the generic function with a default parameter
function wrapInArray<T>(item?: T): T[] {
  return item === undefined ? [] : [item];
}

// Advanced version using a class
class ArrayWrapper<T> {
  private items: T[];

  constructor(item?: T) {
    this.items = wrapInArray(item);
  }

  // Method to add an item to the array
  addItem(item: T): void {
    this.items.push(item);
  }

  // Method to remove the last item from the array
  removeLastItem(): T | undefined {
    return this.items.pop();
  }

  // Method to get all items in the array
  getItems(): T[] {
    return this.items;
  }
}

// Example usage
const numberWrapper = new ArrayWrapper<number>(10);
numberWrapper.addItem(20);
numberWrapper.addItem(30);
numberWrapper.addItem(40);
console.log(numberWrapper.getItems()); // Output
numberWrapper.removeLastItem();
console.log(numberWrapper.getItems()); // Output

const stringWrapper = new ArrayWrapper<string>();
stringWrapper.addItem("Di");
stringWrapper.addItem("Bimbing");
console.log(stringWrapper.getItems()); // Output
