function sumOftwo(array,n){
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i] + array[j] === n){
                console.log(i,j);
            }
            
        }
        
    }
}
sumOftwo([2,7 ,8,,1,0,5,], 9)


function sumOftwo(array,n){
    let obj = {};

    for (let i = 0; i < array.length; i++) {
        obj[[array[i]]] =i
        
    }
    
    for (let i = 0; i < array.length; i++) {
        const diff = n - array[i]
        if(obj[diff]){
            return [i,obj[diff]]
        }
        
    }
}

console.log(sumOftwo([2,7 ,8,1,0,5,], 9));