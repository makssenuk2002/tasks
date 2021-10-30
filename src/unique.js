function unique(...array) {
    let arr = []
    let res ={}
    let ans = []
    for (let i = 0; i < array.length; i++) {
        arr.push(...array[i])
    }
    arr.forEach((i) =>{
        res[i] = res[i] +1 || 1
    })
    for(let keys in res){
        if(res[keys] === 1){
            ans.push(keys)
        }
    }
    
    console.log(ans);
}

unique([11, 2], [22,1,1, 4], [2, 5])