//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
let nums4 = [1, 3, 2, 5, 4];

// https://www.toptal.com/developers/sorting-algorithms

//Sort each array in ascending order.
console.log('\nmy_ascension')

console.log(nums1)
console.log(nums1.sort(function(a, b){return a-b}));

console.log(nums2)
console.log(nums2.sort(function(a, b){return a-b}));

console.log(nums3)
console.log(nums3.sort(function(a, b){return a-b}));

console.log(nums4)
console.log(nums4.sort(function(b, a){return a-b})); //Swap b and a in function

//Sort each array in descending order.
console.log('\nmy_descension')
console.log(nums1.sort(function(a, b){return b-a}));
console.log(nums2.sort(function(a, b){return b-a}));
console.log(nums3.sort(function(a, b){return b-a}));
console.log(nums4.sort(function(b, a){return b-a})); //Swap b and a in function