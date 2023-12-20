// Q2. Given a string 's' consisting of words and spaces, return the length of the **last** word in the string.

// A **word** is a maximal substring consisting of non-space characters only.


function last(str){
    let i= str.length-1;
    while(str[i] !== " "){
        i--
    }
    // console.log(i)
    // console.log(str.length)
    return str.length -1 - i
   
}
// console.log(last("is a maximal substring consisting of non-space characters only"))

// Q3. Given an integer array 'nums', return *the **third distinct maximum** number in this array. 
// If the third maximum does not exist, return the **maximum** number*.


function tmax(arr){
    let first =0
    let sec =0
    let third =0
 
    for (let i =0; i<arr.length; i++){

        if (arr[i]>first){
           [first,sec, third] = [arr[i],first, sec]
         

        }else if(arr[i]>sec){
               [sec, third] =   [arr[i], sec]
               console.log({sec})
        }
        else if(arr[i]>third){
            third = arr[i]
            
        }
    }
      if (third !==0){
        console.log({third})
          return third
      }
      else{
        console.log({first})
        return first
        
      }
}
// console.log(tmax([25,26,23,14,48,2,5,6,25]))

// Q6. Given a string array 'words', return *the* maximum value of 'length(word[i]) * length(word[j])' 
// where the two words do not share common letters. If no such two words exist, return '0'.
// console.log(multiply(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]))

function multiply(arr) {
    let flag = false; 
    let output = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {         
               if (arr[i].length * arr[j].length >output){
            for (let k = 0; k < arr[i].length; k++) {
                if (arr[j].includes(arr[i][k])) {
                    flag = false;
                    break;
                }
                flag =true;
            }          
        }
            if(flag === true){
                output = arr[i].length * arr[j].length 
            }
        }
        
    }

    return output;
}

// console.log(multiply(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));


// Q7. Given a list of non-negative integers 'nums', arrange them such that they form the largest number
// and return it.

function largestNumber(num) {
    return num.sort(function(a, b) {
        return (b + '' + a ) - (a + '' + b);
    }).join('').replace(/^0*/,'') || '0';
}

// /**
//  * @param {number[]} nums
//  * @return {string}
//  */
// const largestNumber = (nums) => {
//     if(!nums || nums.length === 0) {
//         return '0';
//     }
    
//     nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
//     if(nums[0] === 0) {
//         return '0';
//     }
//     return nums.join('');
// };

// function arrange(nums) {
//     let biggest = "";
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if(nums[i] > nums[j]){
//           [nums[i],nums[j]] = [nums[j],nums[i]]
//         }
//     }
        
//     }
//    for (let i =nums.length-1; i>=0; i--){
//             biggest += String(nums[i])
            
//    }
//    return biggest
// }

// console.log(arrange([2,3,30,2,4,3]));

function largestNumber (nums)  {
        if(!nums || nums.length === 0) {
            return '0';
        }
        
        nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
        if(nums[0] === 0) {
            return '0';
        }
        return nums.join('');
    };
    

// console.log(largestNumber([2,3,30,20,4,3]));






// Q7. Given a list of non-negative integers 'nums', arrange them such that they form 
// the largest number
// and return it.

// [2,3,9,20,4,3]

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

// function largest(nums){
//    let str="";
//     for (let i = 0; i < nums.length ; i++){
//         for (let j = i+1; j< nums.length; j++){
//             if (nums[i]>nums[j]){
//                 [nums[i],nums[j]] = [nums[j],nums[i]]
//             }
//         }
//     }
  
//     for (let i=nums.length-1; i >= 0; i--){
//         str+=nums[i]
//     }
//     return str;
// }
// console.log(largest([2,5,49,40,8,1,9]))

function largest(nums) {
    // Define a custom comparison function
    const customCompare = (a, b) => {
        const order1 = `${a}${b}`;
        const order2 = `${b}${a}`;
        return order2.localeCompare(order1); // Use localeCompare for string comparison
    };

    // Sort the array using the custom comparison function
    nums.sort(customCompare);

    // Concatenate the sorted numbers to form the largest number
    let result = "";
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }

    return result;
}

// Example usage
// console.log(largest([2, 5, 49, 40, 8, 1, 9]));

function largestNumber(num) {
    return num.sort(function(a, b) {
        return (b + '' + a ) - (a + '' + b);
    }).join('').replace(/^0*/,'') || '0';
}
// console.log(largestNumber([2, 5, 49, 40, 8, 1, 9]))


//Q8. 4. Minimum Size SubArray Sum Coding Given an array of positive integers nums and a positive
// integer target, return the minimal length of a subarray whose sum is greater than or equal totarget. If there is no such
// subarray, returneinstead.Example 1:

// Input: target= 7, nums [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal
// length under the problem constraint.

// let arr =[2,5,9,4,8,9,10]
// console.log(arr.indexOf(9))

var twoSum = function(nums, target) {
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};
console.log(twoSum ([2,7,11,15],9))