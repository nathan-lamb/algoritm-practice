const mergeRanges = (times) => {
    const mergedTimes = []

    if (times[0].endTime > times[1].startTime || times[0].endTime == times[1].startTime) {
        mergedTimes.push(
            {
                startTime: times[0].startTime,
                endTime: times[1].endTime
            })
        
    }
    console.log(mergedTimes)
    return mergedTimes
}

