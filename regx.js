// let reg = /Somya/i;  case insentitive
// let reg = /Somya/g; gloabel search
// let reg = /\W/gi;


// // returns the reg expression

// console.log(reg)

// // returns what is inside /reg/

// console.log(reg.source)

// let s = "hello this is somya bhardwaj and my name is Somya"


//  1- exec() function of regx


// let result = reg.exec(s)
// while (result){    
//     console.log(result.index)
//     result = reg.exec(s)
// }
// console.log(result)
// console.log(result.index)
// console.log(result.input)



// 2- .test() method

// let result = reg.test(s)
// console.log(result)      ---> returns true if result exist else return false

// 3 - match() function returns array of results

// let result = s.match(reg)
// console.log(result)


// 4- search() returns indexe  of first match

// let result = s.search(reg)
// console.log(result)

// 5 replace() replaces the value matched

// let result = s.replace(reg, "yash")
// console.log(result)

// let reg = /\d/gi;
// let s = " hello this 51 is 5 somy 67 a @ 6 bhardwaj and my name is Somya";

// let result = /\d/gi.exec(s);
// console.log(Number(result[0]))

// if(Number(result[0])){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }
// // while (result !== null) {
// //     console.log(result[0]);  // Access the matched value using result[0]
   
// //     result = reg.exec(s);
// // }

let s = " hello this 51 is 5 somy 67 a @ 6 bhardwaj and my name is Somya";
let arr = ["5","c","2","d"]

let reg = /\d/

