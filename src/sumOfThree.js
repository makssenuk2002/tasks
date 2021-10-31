arr= [-1,0,1,2,-1,-4]



function sumOfThree(nums,target=0){
    let ans = []
    nums = nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length-2; i++) {
        if(nums[i] > target){
            break;
        } 
        if(i>0 && nums[i] === nums[i-1]){
            continue;
        }
        let j = i+1;
        let k = nums.length-1
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k]

            if(sum === target){
                ans.push([nums[i],nums[j],nums[k]])

                while(nums[j] === nums[j+1])j++
                 while(nums[k] === nums[k-1])k--

                j++;
                k--;
                continue;
            }

            if(sum< target){
                j++;
                continue
            }
            if(sum>target){
                k--;
                continue
            }
        }
    }
    return ans 
}
console.log(sumOfThree(arr));