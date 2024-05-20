
function reqListener() {
    
    console.log(this.responseText);
    const arr=JSON.parse(this.responseText);
    console.log(arr);
    for (let i=0;i<arr.length; i++){

console.log(arr[i].flags.png);
console.log(arr[i].name.common);
console.log(arr[i].region);
console.log(arr[i].subregion);
console.log(arr[i].population);
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  