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




main.appendChild(button);
main.appendChild(button2)
// main.appendChild(close2) ;

let root = document.getElementById("root");

let main_container = document.createElement("div");
main_container.className = "main_container";
root.appendChild(main);

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

button2.addEventListener("click", async function () {

  // try to understand this
  fetch("https://api-7p3m.onrender.com/users")
    .then(function (data) {
      return data.json();
    })
    .then((file) => {
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
      console.log(main_container);
      root.appendChild(main_container);
    });
    let close2  = document.createElement("button") ;
close2.className = "close" ;
close2.innerText = "Close X" ;
 

main.appendChild(close2)



    close2.addEventListener("click" , function(){


      let k = document.getElementsByClassName("main_container");

      main_container.innerHTML = "" ;

      main.removeChild(close2)





    })

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
});


