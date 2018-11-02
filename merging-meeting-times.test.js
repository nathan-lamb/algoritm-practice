const { mergeRanges } = require('./merging-meeting-times')
const { reverseString, reverseWords } = require('./reverse-string-inplace')

describe('mergeRanges tests', () => {
    it('mergeRanges is defined', () => {
        expect(mergeRanges).toBeDefined()
    })
    
    it('should merge times where times.length > 2 && elements are in order', () => {
        const times = [{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }, { startTime: 4, endTime: 9 }]
        expect(mergeRanges(times)).toEqual(expect.arrayContaining([{startTime: 1, endTime: 9}]))
    })
})

describe('reverse strings and words', () => {
    it('reverse a single word', () => {
        const string = 'hello'
        expect(reverseString(string)).toEqual('olleh')
    })

    it('reverse a sentence', () => {
        const string = 'hello I am a test string'
        expect(reverseString(string)).toEqual('gnirts tset a ma I olleh')
    })

    it('reverseWords returns an array', () => {
        const sentenceArray = []
        expect(reverseWords(sentenceArray)).toEqual(expect.any(Array))
    })

    it('reverse individual words keeping original word order', () => {
        const sentenceArray = [ 't', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ',
        'h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd' ]
        expect(reverseWords(sentenceArray)).toEqual(expect.arrayContaining([ 'd', 'e', 'd', 'n', 'a', 'l', ' ', 's', 'a', 'h', ' ',
        'e', 'l', 'g', 'a', 'e', ' ', 'e', 'h', 't' ]))
    })
})

