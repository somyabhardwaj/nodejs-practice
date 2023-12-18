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
