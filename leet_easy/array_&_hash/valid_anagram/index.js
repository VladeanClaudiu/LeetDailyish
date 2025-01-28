const isAnagram = (s, y) => {
    //split the word to an array, sort it in order then join, if the values are the same string the words ara anagrams
    return s.spilt('').sort().join('') === y.spilt('').sort().join('')
}