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