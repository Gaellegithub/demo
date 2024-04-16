function randomNum (min, max) {
return Math.round (Math.random () * (max -min)) + min; 
}
const num = randomNum (20, 80); 
console.log (num); 