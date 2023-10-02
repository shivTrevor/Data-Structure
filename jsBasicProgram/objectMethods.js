const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver'
  };
  
  // Object.keys()
  const keys = Object.keys(car);
  console.log("Keys:", keys); // Output: [ 'make', 'model', 'year', 'color' ]
  
  // Object.values()
  const values = Object.values(car);
  console.log("Values:", values); // Output: [ 'Toyota', 'Camry', 2022, 'Silver' ]
  
  // Object.entries()
  const entries = Object.entries(car);
  console.log("Entries:", entries);
  // Output: [ [ 'make', 'Toyota' ], [ 'model', 'Camry' ], [ 'year', 2022 ], [ 'color', 'Silver' ] ]
  
  // Object.assign()
  const additionalInfo = { mileage: '5000 miles', owner: 'John Doe' };
  const extendedCarInfo = Object.assign({}, car, additionalInfo);
  console.log("Extended Car Info:", extendedCarInfo);
  /*
  Output:
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver',
    mileage: '5000 miles',
    owner: 'John Doe'
  }
  */
  

  //===============================================================================
  //using that methods in a loop
  //============================================================================================================
//
//using object.keys() for Each
let charArray = [];
charArray['a'] = 10;
charArray['b'] = 20;
charArray['c'] = 30;

let charObject = Object.assign({}, charArray);

Object.keys(charObject).forEach(char => {
    console.log(`Index '${char}': ${charObject[char]}`);
});

//=======================================================================================================

//by object .enteries
let charArray = [];
charArray['a'] = 10;
charArray['b'] = 20;
charArray['c'] = 30;

Object.entries(charArray).forEach(([char, value]) => {
    console.log(`Index '${char}': ${value}`);
});


//===================================================================================================

//using for of loop with object .enteries
let charArray = [];
charArray['a'] = 10;
charArray['b'] = 20;
charArray['c'] = 30;

for (let [char, value] of Object.entries(charArray)) {
    console.log(`Index '${char}': ${value}`);
}

