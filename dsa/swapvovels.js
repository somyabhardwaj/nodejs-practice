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

// console.log(swap("hellodost"));

// . Given an integer 'n', return *'true' if it is a power of two. Otherwise, return 'false'*. An integer 'n' is a power of two, if there exists an integer 'x' such that 'n == 2^x'.

// Q2. Given an integer array 'nums', return *the **third distinct maximum** number in this array. If the third maximum does not exist, return the **maximum** number*.
// Q1. Given a list of non-negative integers 'nums', arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.
// Q2. Given a string 's' consisting of words and spaces, return the length of the **last** word in the string.

// A **word** is a maximal substring consisting of non-space characters only.