const min = 5; 
const max = 9; 
const arr = []; 

for (let i=min; i <= max;  i++) {
    arr.push (i)
}

arr.sort ((a, b) => a -b ); 
console.log (arr); 