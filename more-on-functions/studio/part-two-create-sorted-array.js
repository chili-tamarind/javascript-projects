function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

function my_funk(arrie) {

  //Within the function:

  //1) Define a new, empty array to hold the final sorted numbers.
  let arrie_sorted = [];
  let arrie_backup = arrie.slice(); // Backup

  while (arrie_backup.length > 0) {

    //2) Use the findMinValue function to find the minimum value in the old array.
    let min_val = findMinValue(arrie_backup);

    //3) Add the minimum value to the new array, and remove the minimum value from the old array.
    arrie_sorted.push(min_val); // Add to 

    let min_index = arrie_backup.indexOf(min_val); // Find index of min value
    arrie_backup.splice(min_index, 1); // Remove first occurrence of min number

    //4) Repeat parts b & c until the old array is empty.
  }

  //5) Return the new sorted array.
  return arrie_sorted;

  //6) Be sure to print the results in order to verify your code.*/
}

  /* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

  function my_funkier(arrie) {

    let arrie_sorted = [];
    let arrie_backup = arrie.slice(); // Backup

    if (arrie_backup.length <= 0){
      return arrie_sorted;}  

    else {      

      let min_val = findMinValue(arrie_backup);
      let min_index = arrie_backup.indexOf(min_val);
      arrie_backup.splice(min_index, 1);
      arrie_sorted.push(min_val);

      return arrie_sorted = my_funkier(arrie_backup);
    }

}

/* function combineEntries(arrayName){
    if (arrayName.length <= 1){
        return arrayName[0];
    } else {
        return arrayName[0]+combineEntries(arrayName.slice(1));
    }

    function removeI(arr) {
    if (Enter base case test here){
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    }
};

    
}*/

///////////////////////////////////////////////////////////

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log('\nmy_funk')
console.log(my_funk(nums1));
console.log(my_funk(nums2));
console.log(my_funk(nums3));

console.log('\nmy_funkier')
console.log(my_funkier(nums1));
console.log(my_funkier(nums2));
console.log(my_funkier(nums3));