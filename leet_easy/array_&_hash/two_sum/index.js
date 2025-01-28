

const twoSum = (nums, target) => {
    let firstIndex = 0
    let secondIndex = 0


    for(let i = 0; i < nums.length; i++) {
        firstIndex++;
         if(nums.slice(firstIndex).includes(target-nums[i])){
            secondIndex = nums.slice(firstIndex).indexOf(target-nums[i])+firstIndex
            return[i, secondIndex]
        }
    }

}