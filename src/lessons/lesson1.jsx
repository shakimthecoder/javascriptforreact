/* export default function PrintLoop() {
    for (var i = 0; i < 50; i++) {
        console.log(i);
        
    }
}

printLoop();

This code shows how var is a function scoped variable, meaning that it is only available within the function in which it is declared.
*/

/* export default function PrintLoop() {
    for (let i = 0; i < 50; i++) {      
    }
}   console.log(i); // ReferenceError: i is not defined;

printLoop();

This code shows how let is a local scope variable, meaning that it is only available within the block in which it is declared, and cannot be accessed outside of that block.
*/

let x = 20;
const y = 30; 

x*y // should equal 600

function PrintLoop () {
    console.log("Hello world");
}

const user = {
    name: "John",
    email: "john20@gmail.com",
    password: "123456"
}

console.log(user.name);
console.log(user["email"]);

const { name, email, password} = user;
console.log(user);

// Map function examples

const Products = ["Product 1", "Product 2", "Product 3", "Product 4"];

const displayItems = Products.map(function (Product){
    return Product;
});

console.log(displayItems);

const displayProducts = Products.map((Product) => `<li>${Product}</li>`);

console.log(displayProducts);

// Filter function examples

const ages = [12, 15, 18, 20, 25, 30];
console.log(ages);

const adults = ages.filter((age) => {
    return age >= 18;
})
console.log(adults);
export default PrintLoop;