/* when searching for a number in a sorted array */

const binarySearch = (target, nums) => {
    /* floorIndex and ceilingIndex are the limits of the search
    we want to start the search between index 0 of the array and the index of the last item */
    let floorIndex = 0
    let ceilingIndex = nums.length

    /* if floorIndex becomes equal to the ceilingIndex then we have come to the end of the array without finding our target number*/
    while (floorIndex + 1 < ceilingIndex) {
        let distance = ceilingIndex - floorIndex
        let halfDistance = Math.floor(distance / 2)

        let guessIndex = floorIndex + halfDistance
        let guessValue = nums[guessIndex]

        if (guessValue == target) {
            console.log("Target is at " + guessIndex.toString())
            return
        } else if (guessValue > target) {
            ceilingIndex = guessIndex
            console.log("check lower half")
        } else if (guessValue < target) {
            floorIndex = guessIndex
            console.log("check upper half")
        }
    }
    console.log("Target does not exist in array")
}

binarySearch(22, [1, 3, 4, 6, 7, 8, 15, 22, 25, 69, 71, 72, 78])
