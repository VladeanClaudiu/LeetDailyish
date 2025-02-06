
const topKFrequent = (nums, k) => {
    const prevValues = new Map();

    nums.forEach(item => {
        if(prevValues.has(item)){
            const currentValue = prevValues.get(item) + 1;
            prevValues.set(item, currentValue)
        }else{
            prevValues.set(item, 1)
        }
    })

    const mapSorted = new Map([...prevValues.entries()].sort((a, b) => b[1] - a[1]))

    const returnedArray = []

    for(let i = 0; i < k; i++) {
        returnedArray.push([...mapSorted][i][0])
    }

    return returnedArray
    
}