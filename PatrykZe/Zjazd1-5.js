// Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]

let strings = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend55555555555555"] ; 
let longest = strings[0];

for (let i = 1 ; i < strings.length  ; i++){
    if(strings[i].length > longest.length) {longest = strings[i] }
    
    
   


}
console.log(longest.length , longest) 
