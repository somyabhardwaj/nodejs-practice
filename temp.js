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