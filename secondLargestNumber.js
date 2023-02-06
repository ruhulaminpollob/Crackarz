// You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.

// Sample Input:
// [10,33,5,99,6]

// Sample output:
// 33

const array = [10,33,5,99,6];
function secondLargest ( numbers ) {
    //Write your code here
    //Don't forget to return
    let largestNumber =numbers[0];
    let secondLargestNumber = numbers[0]
    for(let i= 0 ; i< numbers.length; i++){
        if (largestNumber < numbers[i]) {
            secondLargestNumber=largestNumber;
            largestNumber = numbers[i]
        }else if (secondLargestNumber < numbers[i]) {
            secondLargestNumber = numbers[i];
        }
    }
    return secondLargestNumber;
}
console.log(secondLargest(array));