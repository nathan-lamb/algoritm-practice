const reverseString = (string) => {
    return string.split("").reverse().join("")
}

const reverseWords = (array) => {
    let lastSpace = 0
    let reversedWordsArray = []

    for (let i = 0; i < array.length; i++) {
        if ((array[i + 1]) == ' ') {
            if (lastSpace == 0) {
                const word = array.slice(0, i + 1).reverse()
                reversedWordsArray = word.map(letter => {
                    return letter
                })
                lastSpace = i + 1
                reversedWordsArray.push(" ")
            } else {
                const word = array.slice(lastSpace + 1, i + 1).reverse()
                reversedWordsArray = reversedWordsArray.concat(...word)
                lastSpace = i + 1 
                reversedWordsArray.push(" ")
            }
        }
        if (i + 1 == array.length) {
            const word = array.slice(lastSpace + 1, i + 1).reverse()
                reversedWordsArray = reversedWordsArray.concat(...word)
                lastSpace = i + 1 
        }
    }
    return reversedWordsArray
}

module.exports = {reverseString, reverseWords}