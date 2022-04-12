function all(array1,callBackFunction){

    for (let i = 0; i < array1.length; i++) {
        if (callBackFunction(array1[i])) 
        return true;}
      
      return false;
        }
    
    function callBackFunction(num) {
      num < 7;
    }

let allAreLessThanSeven = all([1, 2, 9], callBackFunction);

console.log(allAreLessThanSeven);

