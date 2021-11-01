function isPlindromeNumber(x){
    let rev = 0;
     while(rev <x){
         rev *= 10;
         rev += x % 10
         x = Math.trunc(x/10)
     }
     return x === rev || x === Math.trunc(rev/10)
 }
 console.log(isPlindromeNumber(1231));
 
 
 