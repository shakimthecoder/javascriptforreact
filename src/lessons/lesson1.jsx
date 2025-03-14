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

