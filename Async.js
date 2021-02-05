// gotIdea from https://www.youtube.com/watch?v=PoRJizFvM7s

// using callback
/*
let customer = [
    {'ID': 'C001','name': 'Dhanushka','address': 'Galle','salary': "85000"},
    {'ID': 'C002','name': 'Asanka','address': 'Galle','salary': "95000"}
];


let getAllCustomers = ()=>{
    setTimeout(()=>{
        console.log(customer);
    },1500);
}

let createCustomer = (customerObj , callback) =>{
    setTimeout(()=>{
        customer.push(customerObj);
        console.log(customerObj);
        callback();

    },2000);
}

createCustomer({'ID': 'C003','name': 'Dinesh','address': 'Galle','salary': "95000"} , getAllCustomers);

*/


// USING promises
// ==================

let customer = [
    {'ID': 'C001','name': 'Dhanushka','address': 'Galle','salary': "85000"},
    {'ID': 'C002','name': 'Asanka','address': 'Galle','salary': "95000"}
];

let getAllCustomers = ()=>{
    setTimeout(()=>{
        console.log(customer);
    },1500);
}

let createCustomer = (customerObj) =>{

    return new Promise((resolve , reject )=>{
        setTimeout(()=>{
            customer.push(customerObj);
            // console.log(customerObj);
    
        },500);
        const error = false;

        if(!error){
            resolve();
        }else{
            reject("Ops..! This Customer Have Not Been Saved...!");
        }
    });
}

createCustomer({'ID': 'C003','name': 'Dinesh','address': 'Galle','salary': "155000"})
.then(getAllCustomers).catch((error)=> console.error(error));


console.log(customer);


const promise1 = Promise.resolve("OK I GOT IT");
const promise2 = 250;
const promise3 = new Promise((resolve , reject)=>{
    setTimeout(resolve , 2000 , 'HELLO I GOOD BYE..!');
});

const fetchAPIs = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2 , promise3 , fetchAPIs ]).then(res => console.log(res));

// USING async & await
// ====================

async function getUserData(){
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const userDataJSON = await users.json();
    console.log(userDataJSON);

}

getUserData();
