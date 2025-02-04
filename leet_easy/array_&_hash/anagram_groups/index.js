
const groupAnagrams = (strs) => {
    const strsModdified = strs.map(string => {return (string.split("").sort().join(""))})

    const prevMap = new Map();

    strsModdified.forEach((string, index) => {
        if(prevMap.get(string)){
            prevMap.set(string, [...prevMap.get(string),strs[index]])
        }else{
            prevMap.set(string, [strs[index]])
        }
    })

    return [...prevMap].map(item => item[1])
}