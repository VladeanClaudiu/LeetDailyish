 /**
     * @param {character[][]} board
     * @return {boolean}
     */
const isValidSudoku = (board) => {
    //board is an array of array, each child array has 9 values

    //if array has a number duplicate not valid
    for(let i = 0; i < board.length; i++) {
        const mappedArray = new Map()
        for(let k = 0; k < board[i].length; k++){
            if(mappedArray.has(board[i][k])){
                const currentCount = mappedArray.get(board[i][k])
                mappedArray.set(board[i][k], currentCount+1)
            }else{
                mappedArray.set(board[i][k], 1)
            }
        }

        const mappedCounted = [...new Set([...mappedArray].filter(item => item[0] !== ".").map(item => item[1]))]

        if(mappedCounted.length > 1){
            return false
        }
        
    }
    //if other arrays other than self have duplicate value at same index not valid
    //if neighbouring cell arrays contain duplicate
}   


