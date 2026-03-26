

let fetch_data = fetch("https://railway-api.free.beeceptor.com/")
let obj = fetch_data.then((data) =>{
 
    return data.json()})
obj.then((array) => {
    console.log(array)
})
