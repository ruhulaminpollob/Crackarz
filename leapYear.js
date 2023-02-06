function findLeapYear(arrOfYears){
    //write your code here
    //don't forget to write return
      let leapYears =[];
      for (let i = 0; i < arrOfYears.length; i++) {
        const year = arrOfYears[i];
        if ((year % 100 == 0 && year % 400 == 0) || (year % 100 != 0 && year % 4== 0) ) {
          leapYears.push(year);
        }
      }
      return leapYears;
}

    const yearsss =[2023,2024,2025,2028,2030]

    console.log(findLeapYear(yearsss));