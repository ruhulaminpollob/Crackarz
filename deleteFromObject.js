

  function deleteProperty(arr) {
    let obj= arr[0];
    let str= arr[1];
    if ( obj.hasOwnProperty(str)) {
        delete obj[str]
        return 'YES'
    }
    else{
        return 'NO'
    }
  }


  


  const arr =[
    {
     fname:'John',
    },'fname'
  ]
  console.log(deleteProperty(arr))