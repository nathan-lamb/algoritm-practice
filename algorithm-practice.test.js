const { mergeRanges } = require('./merging-meeting-times')
const { reverseString, reverseWords } = require('./reverse-string-inplace')
const { mergeArrays } = require('./merge-sorted-arrays')

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
        expect(reverseWords(sentenceArray)).toEqual(['e', 'h', 't', ' ', 'e', 'l', 'g', 'a', 'e', ' ', 's', 'a', 'h', ' ', 'd', 'e', 'd', 'n', 'a', 'l'])
    })
})

describe('merge-sorted-arrays', () => {
    it('returns a single array', () => {
        expect(mergeArrays([],[])).toEqual([])
    })

    it('returns a sorted array', () => {
        expect(mergeArrays([1, 3, 5], [4, 6, 7])).toEqual([1, 3, 4, 5, 6, 7])
    })
})

