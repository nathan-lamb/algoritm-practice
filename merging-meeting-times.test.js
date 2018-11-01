const { mergeRanges } = require('./merging-meeting-times')

it('mergeRanges is defined', () => {
    expect(mergeRanges).toBeDefined()
})

it('should merge times where times.length > 2 && elements are in order', () => {
    const times = [
        { startTime: 1, endTime: 3 },
        { startTime: 2, endTime: 4 },
        { startTime: 4, endTime: 9 }
    ]

    expect(mergeRanges(times)).toEqual(expect.arrayContaining([{startTime: 1, endTime: 9}]))
})

