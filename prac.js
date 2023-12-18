// // // function printFruitsByFrequency(fruits) {
// // //   // Object to store the frequency of each fruit
// // //   const frequency = {};

// // //   // Calculate the frequency of each fruit
// // //   for (let i = 0; i < fruits.length; i++) {
// // //     const currentFruit = fruits[i];

// // //     // If the fruit is encountered for the first time, initialize its frequency to 1
// // //     if (!frequency[currentFruit]) {
// // //       frequency[currentFruit] = 1;
// // //     } else {
// // //       // If the fruit has been encountered before, increment its frequency
// // //       frequency[currentFruit]++;
// // //     }
// // //   }

// // //   // Create an array of fruit names
// // //   const fruitNames = Object.keys(frequency);

// // //   // Sort the fruit names based on frequency and original order
// // //   for (let i = 0; i < fruitNames.length - 1; i++) {
// // //     for (let j = i + 1; j < fruitNames.length; j++) {
// // //       const fruitA = fruitNames[i];
// // //       const fruitB = fruitNames[j];

// // //       // Compare frequencies
// // //       if (frequency[fruitB] > frequency[fruitA] ||
// // //         (frequency[fruitB] === frequency[fruitA] && fruits.indexOf(fruitA) > fruits.indexOf(fruitB))) {
// // //         // Swap the positions of fruitA and fruitB
// // //         const temp = fruitNames[i];
// // //         fruitNames[i] = fruitNames[j];
// // //         fruitNames[j] = temp;
// // //       }
// // //     }
// // //   }

// // //   return fruitNames;
// // // }

// // // // // // Example usage:
// // // // // const fruits = ["apple", "banana", "apple", "orange", "banana", "apple", "grape"];
// // // // // const sortedFruits = printFruitsByFrequency(fruits);
// // // // // console.log(sortedFruits);


// // // // const fruits = [ "banana", "apple","apple", "orange", "banana", "apple", "grape"];
// // // // const freq = {}
// // // // const size = fruits.length;
// // // // for (let i = 0; i < size; i++){
// // // //   const fruit = fruits[i];
// // // //   if (freq[fruit]){
// // // //     freq[fruit]++
// // // //   }
// // // //   else{
// // // //     freq[fruit] = 1;
// // // //   }
// // // // }
// // // // console.log(freq)

// // // // const fruitNameArr = Object.keys(freq)

// // // // // console.log(fruitNameArr);

// // // // const arrSize = fruitNameArr.length
// // // // for(let i = 0; i < arrSize - 1; i++ ){
// // // //   for (let j = i + 1; j < arrSize; j++){

// // // //     if (freq[fruitNameArr[j]] > freq[fruitNameArr[i]] || freq[fruitNameArr[j]] === freq[fruitNameArr[i]]  && fruitNameArr.indexOf(fruitNameArr[i]) > fruitNameArr.indexOf(fruitNameArr[j])){
      
// // // //       const temp = fruitNameArr[i];
// // // //       fruitNameArr[i] = fruitNameArr[j]
// // // //       fruitNameArr[j] = temp

// // // //     }

// // // //   }
// // // // }
// // // // console.log("fruitNameArr",fruitNameArr)


// // // // function add(a,b){

// // // //   const c = a+b;
  
// // // // const printSum = ()=>{
// // // //   console.log(c)
// // // // } 

// // // // setTimeout(()=>{
// // // //   printSum();
// // // // },
// // // //   [5000]
// // // // )
// // // // }

// // // // add(7,3)

// // // function addSum(a,b){
// // //     const promise = new Promise((resolve, reject)=>{
// // //         setTimeout(()=>{
// // //             const result = a+b ;
// // //             if (!result){
// // //                 reject ("invalid arguments")
// // //             }
// // //             else{
// // //             resolve(result)
            
// // //             }
// // //         }, [5000]
// // //         )
// // //     })
// // //     return promise;
// // // }

// // // try{
// // //     addSum(4, 5).then((result)=>{
// // //         console.log(result)
// // //     } )
// // // }catch(error){
// // //     console.log(error)
// // // }

// // // function solve(){
// // // const fruits = [ "banana", "apple", "orange", "banana", "apple", "grape","apple"];

// // // const freq = {}
// // // for (let i = 0; i < fruits.length; i++){
// // //     const currentFruit = fruits[i] ;

// // //     if (freq[currentFruit]){
// // //         freq[currentFruit]++
// // //     }
// // //     else{
// // //         freq[currentFruit] =1;
// // //     }
// // // }
// // // console.log(freq)

// // // const newArray = Object.keys(freq)
// // // console.log(newArray)

// // // for (let i =0; i < newArray.length - 1; i++){
// // //     for (j = i + 1; j < newArray.length; j++){
// // //        const fruitA = newArray[i]
// // //         const fruitB = newArray[j]
// // //         // console.log(fruitA, fruitB)

// // //         if (freq[fruitB] > freq[fruitA] || (freq[fruitB] === freq[fruitA] && fruits.indexOf(fruitA) > fruits.indexOf(fruitB))){
// // //             const temp = newArray[i];
// // //             newArray[i] = newArray[j]
// // //             newArray[j] = temp;
// // //         }
                  
// // //     }
    
// // // }
// // // console.log("this is new",newArray)
// // // }
// // // solve()
// // // const fruits = [ "banana", "apple", "orange", "banana", "apple", "grape","apple"];
// // // const arr = fruits.slice(2,6)
// // // console.log(arr)
// // // const fruit = "hello there how are you";
// // // const arrr = fruit.slice(2,7)
// // // console.log(arrr)


// // // function Consecutive(arr) {
// // // for(let i = 0; i < arr.length - 1; i++){
// // //   for (let j = i+1;  j < arr.length; j++){
   
// // //     if (arr[i] > arr[j] ){
// // //       const temp = arr[i];
// // //       arr[i] = arr[j];
// // //       arr[j] = temp;
// // //     }
// // //   }
// // // }
// // //    let sum =0;
// // // for (let k = arr[0]; k <= arr[arr.length - 1]; k++){

// // //   if (arr.includes(k)){
// // //    continue;
// // //   }
// // //   else{
// // //     sum++
// // //   }
  
  
// // // }
// // // console.log (sum)
// // // }

// // // Consecutive([5,10, 15]);

// // // const str = "hello"
// // // const nstr = str.split('')
// // // console.log(nstr)

// // // for (let i = 0; i < nstr.length-1; i++){
// // //   for (let j = i+1; j <nstr.length; j++){
        
// // //     const temp = nstr[i];
// // //     nstr[i] = nstr[j];
// // //     nstr[j] =temp;


// // //   }
// // // }
// // // console.log(nstr)



// // // function PalindromicSubstring(str) {
// // //   let longest = "";
// // //   for (let i = 0; i < str.length; i++) {
// // //     for (let j = i + 1; j <= str.length; j++) {
// // //       let substring = str.slice(i, j);
// // //       if (isPalindrome(substring) && substring.length > longest.length) {
// // //         longest = substring;
// // //       }
// // //     }
// // //   }
// // //   return longest.length > 2 ? longest : "none";
// // // }

// // // function isPalindrome(str) {
// // //   return str === str.split("").reverse().join("");
// // // }

// // // const str = "bdkjbdkrac\
// // // bsackjcarsdkjbkacecajsdb"
// // // let substr = ""
// // // let longest = "";
// // // for (let i = 0; i < str.length; i++) {
// // //      for (let j = i + 1; j <= str.length; j++) {     
// // //       substr = str.slice(i,j)      
// // //       if (ispalindrom(substr) && substr.length > longest.length ){
// // //         longest = substr;
// // //       }
// // //     }
// // //   }
// // //   const result = longest.length > 2 ?longest:"none"
// // // console.log(result)
    
// // //     function ispalindrom(str){
// // //       return str === str.split("").reverse().join("")
// // //     }
// // // function PalindromicSubstring(str) {

// // //   let longest = ""
// // //   let substr =""
// // //      for (let i = 0; i < str.length; i++){
// // //       for (let j = i+1; j < str.length; j++){
// // //           substr = str.slice(i,j);
// // //           if (isPalindrom(substr) && substr.length > longest.length ){
// // //             longest = substr
// // //           }
          
// // //       }
// // //     }
// // //       const result = longest.length > 2 ? longest : "none"
// // //       console.log(result)
// // //      }
  
// // //   function isPalindrom(str){
// // //     return str === str.split("").reverse().join("")
// // //   }
  
// // //   PalindromicSubstring("palindrome")

// // // function add (a , b){
// // //   return new Promise((resolve, reject)=>{
   
// // //     setTimeout(()=>{
// // //       let result = a+b;
// // //       if (!result){
// // //         reject("ivalid argiments")
// // //       }
// // //       else{
// // //         resolve(result)
// // //       }
// // //     },[5000])
    
// // // })}
// // // try{
// // //   add(4,5).then((result)=>{
// // //     console.log(result)
// // //   })

// // // }catch(err){
// // //   console.log(err)
// // // }

// // // find nth prime number

// // // function prime(n) {
// // //   let arr = [2];
// // //   let i = 3;

// // //   while (arr.length < n) {
// // //     let isprime = true;

// // //     for (let j = 0; j < arr.length; j++) {
// // //       if (i % arr[j] === 0) {
// // //         isprime = false;
// // //         break;
// // //       }
// // //     }

// // //     if (isprime) {
// // //       arr.push(i);
// // //     }

// // //     i += 2;
 
// // //   }
// // //   console.log(arr[arr.length - 1]);
// // // }

// // // prime(9);

// // // function isPalindrome(num) {
// // //   let reverse = 0;
// // //   let temp = num;
// // //   while (temp > 0){
// // //    let i = temp % 10;
// // //    reverse = reverse*10 + i;
// // //    temp = Math.floor(temp/10); 
// // //   }
// // //   if (reverse === num)
// // //   console.log(reverse)
// // //   else
// // //   console.log("else",reverse)
// // // }
// // // isPalindrome(331)


// // // function isEasyToPronounce(s) {
// // // const vowels = ['a', 'e', 'i', 'o', 'u'];
// // // let count = 0;
// // // for (let i =0; i < s.length; i++){

// // // if (!vowels.includes(s[i])){
// // //   count++;
// // //   if (count >= 4){
// // //     console.log( "NO");
// // //     return;
// // //   }}
// // //   else{
// // //     count = 0
// // //   }

// // // }
// // // console.log( "Yes")
// // // }

// // // isEasyToPronounce("tryst")

// // // function isEasyToPronounce(s) {
// // //   const vowels = ['a', 'e', 'i', 'o', 'u'];
// // //   let count = 0;

// // //   for (let i = 0; i < s.length; i++) {
// // //     if (!vowels.includes(s[i])) {
// // //       count++;
// // //       if (count >= 4) {
// // //         console.log("NO");
// // //         return;  // Exit the function early if count is greater than or equal to 4
// // //       }
// // //     } else {
// // //       count = 0;
// // //     }
// // //   }

// // //   console.log("Yes");
// // // }

// // // isEasyToPronounce("tryst");

// // // const arr = [1, 2, 3, 7, 5];
// // // const sum = 12;
// // // let earr = [];
// // // let count = 0; // Move the declaration here
// // // let found = false;

// // // for (let i = 0; i < arr.length - 1 && !found; i++) {
// // //   for (let j = i + 1; j <= arr.length && !found; j++) {
// // //     let newArr = arr.slice(i, j);
// // //     count = 0; // Reset count for each iteration

// // //     for (let k = 0; k < newArr.length; k++) {
// // //       count += newArr[k];
// // //     }

// // //     if (count === sum) {
// // //       console.log(newArr);
// // //       found = true;
// // //       break;
// // //     }
// // //   }
// // // }

// // // // You may decide where you want to place the return statement based on your requirements.
// // // // For now, I've left it outside the loops.
// // // return null;
// // // var findKthPositive = function(arr, k) {
// // //   let newArr = [];

// // //   for (let i = 0; i < arr.length; i++) {
// // //     for (let j = i + 1; j < arr.length; j++) {
// // //       if (arr[i] > arr[j]) {
// // //         const temp = arr[i];
// // //         arr[i] = arr[j];
// // //         arr[j] = temp;
// // //       }
// // //     }
// // //   }

// // //   for (let n = 1; n <= arr[arr.length - 1] + k; n++) {
// // //     if (!arr.includes(n)) {
// // //       newArr.push(n);
// // //     }
// // //   }

// // //   return newArr[k - 1] || arr[arr.length - 1] + k - newArr.length;
// // // };

// // // console.log(findKthPositive([2, 3, 4, 7, 11], 5));

// // // var findKthPositive = function(arr, k) {
// // //   let prev = 0;
  
// // //   for(let i = 0; i < arr.length; i++) {
// // //       const diff = arr[i] - prev - 1;
// // //       if(k > diff) k -= diff;
// // //       else return prev + k;
// // //       prev = arr[i];
// // //   }
// // //   return prev + k     
// // // };

// // // let first =0;
// // // let second = 1;
// // // let next = first + second;
// // // let arr =[]
// // // for (let i = 1; i <= 10; i++){
  
// // //   arr.push(first)
// // //   console.log(arr);
// // //   next = first + second
// // //   first = second;
// // //   second = next;
  

// // // }

// // // var firstUniqChar = function(s) {
// // //      for(let i = 0; i < s.length; i++){
// // // //         console.log("lastindex",s.lastIndexOf(s[i]))
// // // // console.log("indexof",s.indexOf(s[i]))
// // //        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
// // //         // console.log("return",s.indexOf(s[i]))
// // //            return s.indexOf(s[i])
           
// // //        }
// // //    }
// // //    return -1;
// // // };

// // // // let s = "hellosomya"


// // // console.log(firstUniqChar("hhellosomya"))
// // var maxProfit = function(prices) {
// //     if(prices == null || prices.length <= 1) return 0;
// //     let minBuy = prices[0];
// //     let profit = 0;
// //     for(let i = 1; i < prices.length; i++) {
// //         minBuy = Math.min(minBuy, prices[i]);
// //         profit = Math.max(profit, prices[i] - minBuy);
// //     }
// //     return profit;
// // };



// // function printFruitsByFrequency(fruits) {
// //   let fruitObj ={}
// //   for (let i = 0; i<fruits.length-1; i++){
// //     for (let j= i+1; j <fruits.length ; j++){
// //       if (fruits[i] === fruits[j]){
// //         let temp = fruits[i]
// //         fruits[i] = fruits[j];
// //         fruits[j] = temp
// //       }
// //     }
// //   }
// //   return fruits
// // }

// // console.log(printFruitsByFrequency(['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry']))

// // const freq ={}
// // for (let i = 0 ; i < fruits.length; i++){
// //     if (freq[fruits[i]] === undefined){
// //         freq[fruits[i]] = 1
// //     }
// //     else
// // freq[fruits[i]] += 1
// // }
// // console.log(freq)

// // const obj = {
// //     name: 'Somya',
// //     email: 'kjdvbjkdv',
// //     Add: 'vlldvksnkds',
// //     hello: 'kjcdbja'
// // };
// // const freq = Object.keys(obj).map(key=>obj[key])
// // const str = freq.join(' ')
// // console.log(typeof(str))
// // console.log(str)
// // console.log(freq)

// // const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry'];

// // for (let i =0; i <fruits.length-1; i++){
// // for (let j =i+1; j <fruits.length; j++){
// //     if (fruits[i] === fruits[j]){
// //         const temp = fruits[i]
// //         fruits[i] = fruits[j]
// //         fruits[j] = temp;
// //      }
// // }}
// // console.log(fruits)
// // const freq ={}
// // fruits.forEach((fruit)=>{
// //      if (freq[fruit]===undefined){
// //         freq[fruit] =1;
// //      }
// //      else{
// //         freq[fruit] +=1
// //      }
// // })

// // console.log(freq)


// // Sorting using a for loop
// // for (let i = 0; i < fruits.length - 1; i++) {
// //     for (let j = i + 1; j < fruits.length; j++) {
// //         if (fruits[i] > fruits[j]) {
// //             // Swap elements if they are in the wrong order
// //             const temp = fruits[i];
// //             fruits[i] = fruits[j];
// //             fruits[j] = temp;
// //         }
// //     }
// // }

// // console.log(fruits);

// // const arr = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry'];

// // function printFruitsByFrequency(fruits) {
// //     const frequency = {}; // Object to store the frequency of each fruit
// //     for (let i = 0; i < fruits.length; i++) {
// //       frequency[fruits[i]] = (frequency[fruits[i]] || 0) + 1; // Count frequency of each fruit
// //     }
// //     console.log(frequency)
// //     console.log(Object.keys(frequency))
// //     const sortedFruits = Object.keys(frequency).sort((a, b) => {
// //              console.log({a})
// //              console.log({b})
// //         if (frequency[b] === frequency[a]) { // If frequency is same, sort based on their index in the original array
// //         return fruits.indexOf(a) - fruits.indexOf(b);
// //       }
      
// //       return frequency[b] - frequency[a]; // Sort based on frequency
// //     });
// //     return sortedFruits;
// //   }
// // printFruitsByFrequency(['apple', 'banana', 'banana', 'cherry', 'apple','banana', 'banana', 'cherry', 'cherry', 'cherry'])

// // const arr= [9,1,2,11,22,0,12,2,3,5,6,8,0]

// //  const sorted = arr.sort((a,b)=> b - a)
// // console.log(sorted)

// // var findAnagrams = function(s, p) {
   
// //          const arr=[]
// //     for (let i =0; i <= s.length; i++){
// //           for(j = i+1; j <= s.length; j++){
// //               const str = s.slice(i,j)
// //             //   console.log(str)
// //             //   console.log(str.split(""))
// //             if(str.length === p.length && (str.split('').sort().join('') === p.split('').sort().join(''))){
// //                  arr.push(i)
// //                  
// //             }
// //           }
       
// //     }
// //    return arr
   
// // };
// // findAnagrams("cbaebabacd", "acb")

// // const strs = "hello"
// // console.log(strs.length)

// // function datediff(date1,date2){
    
// //     console.log(date1.split('/').join(' '))

// // }

// // datediff("30/12/1996","01/07/2020")

// // n=5;
// // let tri =""
// // for (let i=1; i<=n; i++){
   
// //     for (let k = 1; k<=n-i; k++){
// //         tri +=' '
// //      }
// //     for (let j = 1; j<i+; j++){
// //         tri += '*'
        
// //     }
// //     tri += `\n`
    
// // }    


// // console.log(tri)

// // const s= "hello somya bhardwaj hi there";

// // console.log(s.search("hi"))
// // console.log(s[22])

// // function solve(arr){

// //     for (let)
// // }
// // solve( [85, 92, 78, 95, 88])

// // // const s= "hello somya bhardwaj hi there"

// // // console.log(s.split(" ").join(''))
// // let fact =1;
// // for (let i =1; i<=5; i++){
// // fact *= i;
// // console.log(fact)  
    
// // }


// // function fabn(n){
// //     let first =0,second = 1, next =0;
// //     for (let i =0; i < n; i++){
// //         console.log(first)
// //           next = first + second;
// //           first = second;
// //           second = next;
            
// //     }

// // }
// // fabn(10)

// Alisa Bajramovic
// Alisa Bajramovic
// Posted on 8 Jul 2020


// 17

// 1
// Solving Pascal's Triangle in JavaScript
// #
// computerscience
// #
// codenewbie
// #
// javascript
// #
// algorithms
// Algorithm of the Day (41 Part Series)
// 1
// The Happy Number Problem
// 2
// Kadane's Algorithm & The Maximum Subarray Problem
// ...
// 37 more parts...
// 40
// Finding the Angle Between the Hands of a Clock
// 41
// The Container with the Most Water: Solving an Algorithm about Areas
// Today's algorithm is to solve Pascal's Triangle:

// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// Pascal's Triangle is a triangle that starts with a 1 at the top, and has 1's on the left and right edges. Each element is the sum of the two numbers above it.

// Five triangles next to each other. The first triangle has 6 hexagons on each side. The left side's hexagons are yellow and have '1' in them. The right side's hexagons are yellow and have '1' in them. The inner hexagons are all blue. The second triangle is the same as the first, except in the third row, the blue hexagon has a '2' in it, with a red arrow pointing at it from the two hexagons above it. The third triangle is the same as the second, but the fourth row has two 3's in the blue hexagons, with red arrows pointing at them from the above hexagons. The fourth triangle is the same as the third, but the fifth row has 4, 6, 4 in blue hexagons, with red arrows pointing at them from above. The final triangle is the same as the fourth, but the last line has 5, 10, 10, 5 in the blue hexagons, with red arrows pointing at each hexagon from the numbers above.

// In this algorithm, if you're given the number 6, your function should output
// [
// [ 1 ],
// [ 1, 1 ],
// [ 1, 2, 1 ],
// [ 1, 3, 3, 1 ],
// [ 1, 4, 6, 4, 1 ],
// [ 1, 5, 10, 10, 5, 1 ]
// ], which would also be drawn out as

// A triangle with 6 equal sides. Each element is a hexagon. The left and right sides are yellow hexagons, and all other hexagons are blue. First row: 1. Second row: 1 1. Third row: 1 2 1. Fourth row: 1 3 3 1. Fifth row: 1 4 6 4 1. Sixth row: 1 5 10 10 5 1.

// In this post, I'll discuss how to approach this problem, and then go over the solution using JavaScript.

// Approaching the Pascal Triangle Problem
// In Pascal's Triangle, the first and last item in each row is 1. Each of the inner numbers is the sum of two numbers in a row above: the value in the same column, and the value in the previous column.

// One way to approach this problem is by having nested for loops: one which goes through each row, and one which goes through each column. If we're in the first column, we can add 1 to the row. For the subsequent columns, we can add the two values from the above row. If we're in the last column of the row, we can add 1 to the row. We know we're in the last column because the number of columns in each row is equal to the row that we're on--in other words, it's an equilateral triangle.

// Coding the Solution
// To start coding the solution, we can account for two test cases; if the number of rows in the triangle is 0, then we can automatically return an empty array, []. If the number of rows is 1, then we can return a two-dimensional array with one row and one column, [[1]].
// function pascals(numRows) {
//     if (numRows === 0) return [];
//     if (numRows === 1) return [[1]];
//     //...
// }
// We can initialize an array called result, which we'll return at the end of algorithm--so we can include that return statement now.

// We also can set up the first for loop. The outer for loop will account for each row, so it'll increment from 1 until it equals numRows.
// function pascals(numRows) {
//     if (numRows === 0) return [];
//     if (numRows === 1) return [[1]];
//     let result = [];
//     for (let row = 1; row <= numRows; row++) {
//         //...
//     }
//     return result;
// }
// Inside the loop, we'll initialize an array called arr. arr will store the value of each row we're in, and will end up getting pushed to the result array.
// function pascals(numRows) {
//     if (numRows === 0) return [];
//     if (numRows === 1) return [[1]];
//     let result = [];
//     for (let row = 1; row <= numRows; row++) {
//         let arr = [];
//         //...
//         result.push(arr);
//     }
//     return result;
// }
// We also need to set up an inner for loop. The inner for loop will keep track of the column we're on, so it'll increment from 0 until it reaches the value of row. We know to increment to the value of row because we're building an equilateral triangle, which means the number row we're on equals the number of columns in that row.

// Inside the inner for loop, we want to check if we're in the first or last column. So if col equals 0, or col equals row - 1, then we want to push 1 into arr.
// function pascals(numRows) {
//     if (numRows === 0) return [];
//     if (numRows === 1) return [[1]];
//     let result = [];
//     for (let row = 1; row <= numRows; row++) {
//         let arr = [];
//         for (let col = 0; col < row; col++) {
//             if (col === 0 || col === row - 1) {
//                 arr.push(1);
//             }
//             //...
//         }
//         result.push(arr);
//     }
//     return result;
// }
// Finally, for all of the other columns, we want to push the sum of two values to arr. The first value is the element in the array that's one column to the left, and two rows up. The second value is the element in the array that's in the same column, and two rows up.

// The reason we're checking for the element that's two rows up is that we start incrementing the outer for loop at 1, but the result array is 0-indexed.
// function pascals(numRows) {
//     if (numRows === 0) return [];
//     if (numRows === 1) return [[1]];
//     let result = [];
//     for (let row = 1; row <= numRows; row++) {
//         let arr = [];
//         for (let col = 0; col < row; col++) {
//             if (col === 0 || col === row - 1) {
//                 arr.push(1);
//             } else {
//                 arr.push((result[row-2][col-1] + result[row-2][col]));
//             }
//         }
//         result.push(arr);
//     }
//     return result;
// }
// Let me know in the comments if you have other solutions or any questions!

// Algorithm of the Day (41 Part Series)
// 1
// The Happy Number Problem
// 2
// Kadane's Algorithm & The Maximum Subarray Problem
// ...
// 37 more parts...
// 40
// Finding the Angle Between the Hands of a Clock
// 41
// The Container with the Most Water: Solving an Algorithm about Areas
// Top comments (3)
// Subscribe
// pic
// Add to the discussion
 
 
// chety profile image
// Chety
// •
// 1 Sept 21

// Hi,
// How about recursion? Below I am sharing my version
// function pascalTriangle(level){
//     if(level === 0){
//         return [[1]]
//     }
//     const previousValue = pascalTriangle(level - 1); 
//     const lastValOfPrevious =   previousValue[previousValue.length - 1]
//     const currentValue =  lastValOfPrevious.reduce((acc,num,i) => {
//         if(lastValOfPrevious[i + 1] != undefined){
//             acc.push(lastValOfPrevious[i] + lastValOfPrevious[i + 1])
//         }else{
//             acc.push(1)
//         }
//         return acc;
//     },[1]);
//     const result = [...previousValue,currentValue]
//     return result
// }

// 4
//  likes
// Like
// Reply
 
 
// pemasat profile image
// Petr Mašát
// •
// 10 Aug 21 • Edited on 10 Aug

// It is nice, but I don't prefer "let" and "for" in javascript, so i tried re-writte it



// or with JEST testing and doc in gitlab.com/pemasat/playground/-/bl...

// I hope that you will like it.


// 3
//  likes
// Like
// Reply
 
 
// alyconr profile image
// JEYSSON ALY CONTRERAS
// •
// 2 Feb

// I rewrite it in a simplest way
// function pascal(rows) {
//   if (rows === 1) {
//     return [[1]];
//   }
// if (rows === 0) {
//     return [];
//   }
//   const prev = pascal(rows - 1);
//   const last = prev[prev.length - 1];
//   const next = [1];
//   for (let i = 0; i < last.length - 1; i++) {
//     next.push(last[i] + last[i + 1]);
//   }
//   next.push(1);
//   prev.push(next);
//   return prev;
// }

// console.log("index")

function swap(n) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = n.split("");
    let end = arr.length - 1;
    let start = 0;

    while (start < end) {
        if (vowels.includes(arr[start]) && vowels.includes(arr[end])) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        } else if (!vowels.includes(arr[start])) {
            start++;
        } else if (!vowels.includes(arr[end])) {
            end--;
        } else {
            start++;
            end--;
        }
    }
    return arr.join("");
}
// console.log(swap("hellothier"))

function movezeros(arr){
    let i =0;
    for (let j=0; j<arr.length; j++){
        if (arr[j] !== 0){
            arr[i] = arr[j]
            i++
        }
    }
    for (let k=i; k<arr.length; k++){
        arr[k] =0
    }
    return arr
}

// console.log(movezeros([2,3,5,6,80,0,1,2,50,0,1,0,4,0,2,0,4,5,0,4]))
function moveZeros(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            arr[i] = arr[j];
            i++;
        }
    }
    for (let k = i; k < arr.length; k++) {
        arr[k] = 0;
    }
    return arr;
}

// console.log(moveZeros([2, 3, 5, 6, 80, 0, 1, 2, 50, 0, 1, 0, 4, 0, 2, 0, 4, 5, 0, 4]));

function strLength (str){
    let i=0;
    for (i = str.length; str[i] != " "; i--  ){

  console.log(i)        
    }
    console.log(str.length - i)
}
// strLength (`Given a string 's' consisting of words and spaces, return the length of the **last** word in the string`)

function tmax (arr){
let maxArr = new Array(3)
let i=0;
for(let m = 0; m<arr.length; m++){
    if(arr[m] >i){
        i = arr[m]
        if(maxArr[3]){
            maxArr.pop()
        }
        else{
            maxArr.push(i)
        }
    }
}
return maxArr 
}
console.log(tmax([25,26,23,14,48,2,5,6,25]))