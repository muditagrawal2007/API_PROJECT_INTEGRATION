let container = document.createElement("div");

console.log("adsfads");

console.log(container);
container.className = "block";



let main = document.createElement("div");



let search1 = document.createElement("div");
search1.className = "Search";
search1.innerText = "Name of the passenger";
let textBox1 = document.createElement("input");
textBox1.className = "input";
textBox1.placeholder = "Name";
search1.appendChild(textBox1);


main.appendChild(search1);

let search2 = document.createElement("div");
search2.className = "Search";
search2.innerText = "PNR number";
let textBox2 = document.createElement("input");
textBox2.className = "input";
textBox2.placeholder = "Pnr_number";
search2.appendChild(textBox2);
main.appendChild(search2);

let search3 = document.createElement("div");
search3.className = "Search";
search3.innerText = "Age";
let textBox3 = document.createElement("input");
textBox3.className = "input";
textBox3.placeholder = "Age";
search3.appendChild(textBox3);
main.appendChild(search3);

let search5 = document.createElement("div");
search5.className = "Search";
search5.innerText = "Train name";
let textBox5 = document.createElement("input");
textBox5.className = "input";
textBox5.placeholder = "Vande Bharat";
search5.appendChild(textBox5);
main.appendChild(search5);

let search4 = document.createElement("div");
search4.className = "Search";
search4.innerText = "Destination";
let textBox4 = document.createElement("input");
textBox4.className = "input";
textBox4.placeholder = "Destination";
search4.appendChild(textBox4);
main.appendChild(search4);

let button = document.createElement("button");
button.className = "button";
button.innerText = "Search";

let button2 = document.createElement("button"); 
button2.className ="button2" ;
button2.innerText = "Get all the data ";

let buttonClear = document.createElement("button");
buttonClear.className = "button";
buttonClear.innerText = "Clear";

let sortSelect = document.createElement("select");
sortSelect.className = "sort-select";
sortSelect.style.display = "none";
sortSelect.innerHTML = `
  <option value="">Select Sort Order</option>
  <option value="asc">Sort A-Z (Ascending)</option>
  <option value="desc">Sort Z-A (Descending)</option>
`;

main.appendChild(button);
main.appendChild(button2);
main.appendChild(buttonClear);
main.appendChild(sortSelect);
// main.appendChild(close2) ;

let root = document.getElementById("root");

let main_container = document.createElement("div");
main_container.className = "main_container";
root.appendChild(main);
root.appendChild(main_container);

let close2 = null;

button.addEventListener("click", async function () {
  let nameValue = textBox1.value.toLowerCase();
  let pnrValue = textBox2.value.toLowerCase();
  let ageValue = textBox3.value.toLowerCase();
  let trainValue = textBox5.value.toLowerCase();
  let destinationValue = textBox4.value.toLowerCase();

  fetch("https://api-7p3m.onrender.com/users")
    .then(function (data) {
      return data.json();
    })
    .then((file) => {
      main_container.innerHTML = "";
      
      if (close2) {
        main.removeChild(close2);
        close2 = null;
      }
      
      let filteredData = file.filter((element) => {
        let nameMatch = nameValue === "" || element.name.toLowerCase().includes(nameValue);
        let pnrMatch = pnrValue === "" || element.pnr_number.toLowerCase().includes(pnrValue);
        let ageMatch = ageValue === "" || element.age.toString().includes(ageValue);
        let trainMatch = trainValue === "" || element.train_name.toLowerCase().includes(trainValue);
        let destinationMatch = destinationValue === "" || element.destination_station.toLowerCase().includes(destinationValue);

        return nameMatch && pnrMatch && ageMatch && trainMatch && destinationMatch;
      });

      filteredData.forEach((element, i) => {
        let container = document.createElement("div");
        container.className = "block";

        let inner1 = document.createElement("p");
        inner1.innerText = element.pnr_number;

        let inner2 = document.createElement("p");
        inner2.innerText = element.name;

        let inner3 = document.createElement("p");
        inner3.innerText = element.destination_station;

        let inner4 = document.createElement("p");
        inner4.innerText = element.train_name;

        let inner5 = document.createElement("p");
        inner5.innerText = element.age;

        container.append(inner1, inner2, inner3, inner4, inner5);
        main_container.append(container);
      });

      sortSelect.style.display = "inline-block";

      close2 = document.createElement("button");
      close2.className = "close";
      close2.innerText = "Close X";
      main.appendChild(close2);

      close2.addEventListener("click", function () {
        main_container.innerHTML = "";
        main.removeChild(close2);
        close2 = null;
        sortSelect.style.display = "none";
      });
    });
});

button2.addEventListener("click", async function () {
  fetch("https://api-7p3m.onrender.com/users")
    .then(function (data) {
      return data.json();
    })
    .then((file) => {
      main_container.innerHTML = "";
      
      if (close2) {
        main.removeChild(close2);
        close2 = null;
      }
      
      file.forEach((element, i) => {
        let container = document.createElement("div");
        container.className = "block";

        let inner1 = document.createElement("p");
        inner1.innerText = element.pnr_number;

        let inner2 = document.createElement("p");
        inner2.innerText = element.name;

        let inner3 = document.createElement("p");
        inner3.innerText = element.destination_station;

        let inner4 = document.createElement("p");
        inner4.innerText = element.train_name;

        let inner5 = document.createElement("p");
        inner5.innerText = element.age;

        container.append(inner1, inner2, inner3, inner4, inner5);
        main_container.append(container);
      });

      sortSelect.style.display = "inline-block";

      close2 = document.createElement("button");
      close2.className = "close";
      close2.innerText = "Close X";
      main.appendChild(close2);

      close2.addEventListener("click", function () {
        main_container.innerHTML = "";
        main.removeChild(close2);
        close2 = null;
        sortSelect.style.display = "none";
      });
    });
});

buttonClear.addEventListener("click", function () {
  textBox1.value = "";
  textBox2.value = "";
  textBox3.value = "";
  textBox5.value = "";
  textBox4.value = "";
});

sortSelect.addEventListener("change", function () {
  let sortOrder = sortSelect.value;
  
  if (sortOrder === "") {
    return;
  }
  
  let blocks = document.querySelectorAll(".block");
  let blockArray = Array.from(blocks);
  
  blockArray.sort(function(a, b) {
    let pElements_a = a.querySelectorAll("p");
    let pElements_b = b.querySelectorAll("p");
    
    let nameA = pElements_a[1].innerText.toLowerCase();
    let nameB = pElements_b[1].innerText.toLowerCase();
    
    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else if (sortOrder === "desc") {
      return nameB.localeCompare(nameA);
    }
  });
  
  main_container.innerHTML = "";
  blockArray.forEach(function(block) {
    main_container.appendChild(block);
  });
});

// let inner1 = document.createElement("div")
// inner1.className = "inner1"
// let inner2 = document.createElement("div")
// inner2.className = "inner2"
// let inner3 = document.createElement("div")
// inner3.className = "inner3"
// let inner4 = document.createElement("div")
// inner4.className = "inner4"
// let inner5 = document.createElement("div")
// inner5.className = "inner5"
// container.appendChild(inner4)
//     container.appendChild(inner1)

//     container.appendChild(inner2)
//     container.appendChild(inner5)
//     container.appendChild(inner3)

// console.log(container)

// console.log(container.innerText)
// root.appendChild(container);

// button2.addEventListener("click", async function () {

//   // try to understand this
//   fetch("https://api-7p3m.onrender.com/users")
//     .then(function (data) {
//       return data.json();
//     })
//     .then((file) => {
//       file.forEach((element, i) => {
//         let container = document.createElement("div");

//         container.className = "block";

//         let inner1 = document.createElement("p");
//         inner1.innerText = element.pnr_number;

//         let inner2 = document.createElement("p");
//         inner2.innerText = element.name;

//         let inner3 = document.createElement("p");
//         inner3.innerText = element.destination_station;

//         let inner4 = document.createElement("p");
//         inner4.innerText = element.train_name;

//         let inner5 = document.createElement("p");
//         inner5.innerText = element.age;

//         container.append(inner1, inner2, inner3, inner4, inner5);

//         main_container.append(container);
//       });
//       console.log(main_container);
//       root.appendChild(main_container);
//     });
//     let close2  = document.createElement("button") ;
// close2.className = "close" ;
// close2.innerText = "Close X" ;
 

// main.appendChild(close2)



//     close2.addEventListener("click" , function(){


//       let k = document.getElementsByClassName("main_container");

//       main_container.innerHTML = "" ;

//       main.removeChild(close2)





//     })

    

  // let fetch_data = await fetch("https://api-7p3m.onrender.com/users");
  // let file = await fetch_data.json();

  // console.log(file);

  // file.forEach((element , i ) => {

  //   let container = document.createElement("div");

  //   container.className  = "block"

  //   let inner1 = document.createElement("p");
  //   inner1.innerText = element.pnr_number;

  //   let inner2 = document.createElement("p");
  //   inner2.innerText = element.name;

  //   let inner3 = document.createElement("p");
  //   inner3.innerText = element.destination_station;

  //   let inner4 = document.createElement("p");
  //   inner4.innerText = element.train_name;

  //   let inner5 = document.createElement("p");
  //   inner5.innerText = element.age;

  //   container.append(inner1, inner2, inner3, inner4, inner5);

  //   main_container.append(container);

  // });
  // console.log(main_container)
  // root.appendChild(main_container)
// });


