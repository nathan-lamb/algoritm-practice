const mergeArrays = (array1, array2) => {
    const unsortedArray = [...array1, ...array2]

    unsortedArray.map(num1 => unsortedArray.map((num2, i) => {
        if (unsortedArray[i] > unsortedArray[i + 1]) {
            [unsortedArray[i], unsortedArray[i + 1]] = [unsortedArray[i + 1], unsortedArray[i]]
        }
    })) 
    return unsortedArray
}

mergeArrays([1, 3, 5], [4, 6, 7])

module.exports = {mergeArrays}