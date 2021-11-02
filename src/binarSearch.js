let nums = [4,5,6,7,8,1,2]

function search(nums,target){
    let left = 0;
    let right = nums.length -1;



    while(left<=right){
        let mid = Math.floor(right-left)/2 ;

        if(nums[mid] === target){
            return mid
        }

        if(nums[left] <= nums[right] ){
              if(nums[left] <= target && target <= nums[mid]){
                  right=mid -1
              }else{
                  left = mid+1
              }
        }else{
            if(nums[mid] <= target && target <= nums[right]){
                left = mid +1
            }{
                right = mid -1
            }
        }
    }

    return -1
}

console.log(search(nums,7));