const min = 3; 
const max = 8; 
const arr = [min, max]; 


for (let i = 3; i < 7; i++) {
    arr.push (i + 1); 
}
arr.sort ((a, b) => a-b ); 

console.log (arr); 