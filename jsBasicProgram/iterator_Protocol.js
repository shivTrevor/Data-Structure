/**
 * Its an advance topic ...
 * The Iterator Protocol allows objects to be looped over with 'for...of' loops. 
 * It provides a standardized way to work with data structures. 
 * This makes it easier to create custom iterable objects and ensures 
 * they can be used seamlessly across different parts of our code. 
 * 
 * Becuase of this iterator protocol I am able to fetch the data in maps and set and also
    print it straightly though it was not set inbuild property .....
 * 
 */

let myIterable = {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() { //next method
          if (i < 3) {
            return { value: i++, done: false };  //value method and done method 
          }
          return { value: undefined, done: true };
        }
      };
    }
  };
  
  let iterator = myIterable[Symbol.iterator]();
  
  console.log(iterator.next()); // { value: 0, done: false }
  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }



  //one more example of iterator Protocol
  let myIterable1 = {
    data: [1, 2, 3, 4, 5],
    index: 0,
    [Symbol.iterator]() {
      return {
        next: () => {
          if (this.index < this.data.length) {
            return { value: this.data[this.index++], done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  };
  
  let iterator1 = myIterable1[Symbol.iterator]();
  
  for (let value of iterator1) {
    console.log(value);
  }
  
  