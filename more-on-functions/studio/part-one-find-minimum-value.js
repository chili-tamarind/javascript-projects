//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
let nums4 = nums1.concat(nums2, nums3)

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

function my_min(num) {

    // https://www.geeksforgeeks.org/find-the-min-max-element-of-an-array-using-javascript/#
    let mini_nim = Math.min(...num);
    return mini_nim;
}

console.log(my_min(nums1));
console.log(my_min(nums2));
console.log(my_min(nums3));

console.log('nums4 ', nums4);
console.log(my_min(nums4));