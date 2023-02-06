// You received your final exam results. Write a function that will take your mark as an input and return you a grade, as shown in the sample input and output below.

// The grading chart is 

// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade


function findGrade(marks){
    //write your code here
    //don't forget to write return
    if (marks >100 || marks < 0) {
        return 'Wrong Input'
    }
    const MarkBreakPoint =[40, 50, 60, 80, 100,]
    
    const gradeName = ['F' , 'D', 'C', 'B', 'A']
    for(let i = 0 ; i < MarkBreakPoint.length; i++){
        if (marks < MarkBreakPoint[i]) {
            return gradeName[i];
        }  
    }
}

console.log(findGrade(30));