const arr = [1,1,2,3,3,4]

const singlNumber = function(nums){
    let obj = {};
    nums.forEach((e) =>{
        obj[e] = obj[e] +1 || 1
    })
    for(let keys in obj){
        if(obj[keys] === 1){
            return keys
        }
    }
}
console.log(singlNumber(arr));