
// Asynconised javascript  

setTimeout(()=>{
console.log("hello time out");
},50);

let getName = () =>{
    console.log("This Is Get Name Arrow Function");
}

let getSponcered = (sponcered) =>{
    console.log("This Is Get Sponcered Arrow Function With "+sponcered);
}
getName();
getSponcered("Aurora Technologies.");


// to avoid this we can use 

//     1.callbacks
//     2.promises
//     3.async and await

