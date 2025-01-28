

const twoSum = (nums, target) => {
    // let firstIndex = 0
    // let secondIndex = 0


    // for(let i = 0; i < nums.length; i++) {
    //     firstIndex++;
    //     const diff =  target-nums[i]
    //      if(nums.slice(firstIndex).includes(diff)){
    //         secondIndex = nums.slice(firstIndex).indexOf(diff)+firstIndex
    //         return[i, secondIndex]
    //     }
    // }

    const prevMap = new Map()


    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if(prevMap.has(diff)){
            return [prevMap.get(diff), i]
        }

        prevMap.set(nums[i], i)
    }
}