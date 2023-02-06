// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. 

// Input:

// The input parameter will be an array of integers, where each integer represents the mark of a subject given above.

// Output:

// Print the result in 2 decimal places. If you get a fraction rounded up to 2 decimal places. The output must have to be in number format.

function average (arrOfMarks){
    //write your code here
   // don't forget to write return
    const subjects = arrOfMarks.length;
    let totalMarks =0;
    for(let i=0 ; i<arrOfMarks.length; i++ ){
        totalMarks += arrOfMarks[i];
    }
    const calculation = totalMarks / subjects;
    const average = calculation.toFixed(2);
    return parseFloat(average);

}

const marks = [75.25, 65, 80, 35.45, 99.50];
console.log(average(marks));