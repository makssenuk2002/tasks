const obj = {
    viktor: ['apple', 'grape', 'orange', 'apple', 'banana'],
    kate: ['grape', 'orange', 'apple', 'grape', 'banana']
}



function calc(obj) {
    // let viktor = {};
    let kate = {};
    // let ans = {
    //     victor: viktor,
    //     kate:kate
    // }
    let arr = {
        viktor:{},
        kete:{}
    };

    for(let key in obj){
        if(key == 'viktor'){
           
           let viktor = obj[key].reduce(()=> {
                
               for(let i=0; i<obj[key].length; i++){
                   let a = obj[key][i]
                    if(obj[key][a] != undefined){
                        ++arr.viktor[a]
                    }else{
                        arr.viktor[a] =1;
                    }
               }
                
           })
           console.log(arr);


        }
    }

        
// console.log(ans);
}  
calc(obj)
