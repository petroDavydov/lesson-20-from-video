console.log(localStorage);
console.log(
  localStorage.setItem(
    "my_first_data",
    JSON.stringify({ individualname: "mango", age: 24 })
  )
);

// console.log(localStorage.getItem('my_first_data'));

const saveData = localStorage.getItem("my_first_data");
console.log(saveData);

const parsData = JSON.parse(saveData);
console.log(parsData);


