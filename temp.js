// // No XOR allowed
// // Medium
// // XOR of two numbers is a bitwise operator that returns 1 if the corresponding bits of its operands are different, and 0 if they are the same. For example, the XOR of 5 (in binary 101) and 3 (in binary 011) is 6 (in binary 110), because the first and third bits are different in the operands.

// // Once upon a time, there was a problem where we had to find the XOR of two integers without using the XOR operator. This was a tricky problem because XOR is a commonly used operator for finding the XOR of two integers. However, we had to find a solution without using it.

// // Example 1:
// // Input:
// // x = 1, y = 2

// // Output:
// // 3

// // Example 2:
// // Input:
// // x = 3, y = 5

// // Output:
// // 6

// // function myXOR(x, y)
// // {
// //    return (x & (~y)) | ((~x ) & y);
// // }

// function findSubarray(arr, sum) {
//     let start = 0;
//     let end = 0;
//     let currSum = arr[0];
  
//     while (start <= end && end < arr.length) {
//       if (currSum === sum) {
//         return arr.slice(start, end + 1);
//       } else if (currSum < sum) {
//         end++;
//         currSum += arr[end];
//       } else {
//         currSum -= arr[start];
//         start++;
//       }
//     }
  
//     return null;
//   }

var findKthPositive = function(arr, k) {
    let prev = 0;
    
    for(let i = 0; i < arr.length; i++) {
        const diff = arr[i] - prev - 1;
        if(k > diff) k -= diff;
        else return prev + k;
        prev = arr[i];
    }
    return prev + k     
  };
  //  Q1- Majority Element

function maj(nums){

    let count =0;
    let ans = null;
    for (let i =0; i< nums.length; i++){
        if (count ===0){
            ans = nums[i]
            count++
        }
        else{
            if (nums[i] === ans){
                 count++
            }
            else{
                count --
            }
        }
    }
    let n =0;
    for (let i=0; i<nums.length; i++){
        if (nums[i]===ans){
             n++;
        }
    }
 
    return n >= Math.floor(nums.length/2)?true:false

}
// console.log(maj([1 ,2, 3, 4, 5 , 1 ,1 ,1, 5 ,1, 1 ]))


//Q2- Greatest Sum Divisible by Three
//Input: nums = [3,6,5,1,8]
// Output: 18
// Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).

function gSum(arr){
    let garr=[]
      for (let i =0; i <arr.length; i++){
        for (let j =i+1; j<arr.length; j++){
            if ((arr[i]+arr[j])%3 === 0 ){
                   garr.push((arr[i]+arr[j]))
            }
        }
      }
      if (garr.length === 0) {
        return "No valid pairs found.";
      }
      console.log(garr)
      return Math.max(...garr)
}
console.log(gSum([3,6,5,1,8]))