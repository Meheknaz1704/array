var colors= ['Blue','Purple','Black','White','Pink'];

console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(colors[3])
console.log(colors[4])

console.log(colors.length)

// push- adding the element in the end of array.
colors.push('Yellow');
console.log(colors)
console.log(colors.length)

// pop-removing the element from the end of the array.
colors.pop();
console.log(colors)
console.log(colors.length)

//unshift-adding the element in the begining of the array.
colors.unshift('Yellow');
console.log(colors) 

// shift-removing the element from the begining of the array.
colors.shift();
console.log(colors)

// splice-inserting the element in the middle of the array.
var colors= ['Blue','Purple','Black','White','Pink'];
colors.splice(3,0,'Yellow');
console.log(colors)

colors.splice(3,2);
console.log(colors)

// concatenate.
var a=['Blue','Black'];
var b=['Yellow','Pink'];

var c=a.concat(b)
console.log(c);

var c=b.concat(a)
console.log(c);

// array-reverse
colors.reverse();
console.log(colors)

// Iterating over an array.
var animals=['cat','tiger','lion','cow','chetah','dog','horse','elephant','fox','fish'];
for(var i=0;i<=animals.length -1;i++){
   console.log(animals[i]) 
}




