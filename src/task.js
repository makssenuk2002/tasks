const obj = {
    viktor: ['apple', 'grape', 'orange', 'apple', 'banana'],
    kate: ['grape', 'orange', 'apple', 'grape', 'banana']
}



function calc(obj) {
    let viktor = {};
    let kate = {};
    let ans = {
        victor: viktor,
        kate:kate
    }

    for(let key in obj){
        if(key == 'viktor'){
            for (var i = 0; i < obj[key].length; ++i)
            {
                var a = obj[key][i];
                if (viktor[a] != undefined)
                    ++viktor[a];
                else
                    viktor[a] = 1;
            }
        }else {
            for (var i = 0; i < obj[key].length; ++i)
            {
                var a = obj[key][i];
                if (kate[a] != undefined)
                    ++viktor[a];
                else
                    kate[a] = 1;
            }
        }
    }

        
console.log(ans);
}  
calc(obj)
