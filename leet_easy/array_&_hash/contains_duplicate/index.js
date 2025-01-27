const hasDuplicate = (nums) => {
    const numsSet = [...new Set(nums)]

    return numsSet.length !== nums.length
}

const testArr1 = [1, 2, 3, 3]
const testArr2 = [1, 2, 3, 4]


console.log(testArr1)
console.log(testArr2)

console.log("test")
