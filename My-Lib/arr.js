let v = 19292

let seconds = v % 60
let minutes = Math.floor(v / 60) % 60
let hours = Math.floor(v / 60 / 60)

console.log(seconds)
console.log(minutes)
console.log(hours)