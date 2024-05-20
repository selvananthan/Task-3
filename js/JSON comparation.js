function compareJSON(obj1, obj2) {

    let entries1 = Object.entries(obj1);
    let entries2 = Object.entries(obj2);

    entries1.sort((a, b) => a[0].localeCompare(b[0]));
    entries2.sort((a, b) => a[0].localeCompare(b[0]));
  

    let str1 = JSON.stringify(entries1);
    let str2 = JSON.stringify(entries2);
    return str1 === str2;
  }
  let obj1 = {name: "person 1", age: 5};
  let obj2 = {age: 5, name: "person 1"};
  
  console.log(compareJSON(obj1, obj2));
  console.log(compareJSON({a: 1}, {a: 2}));
  
  