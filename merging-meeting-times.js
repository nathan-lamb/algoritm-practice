const mergeRanges = (times) => {
    const mergedTimes = [
        {
        startTime: 0,
        endTime: 0
        }
    ]
    //order by start time
    const orderedTimes = times.sort((a, b) => {
        return a.startTime - b.startTime
    })

    //order by end time

    for (let startTimeIdx = 0; startTimeIdx < orderedTimes.length - 1; startTimeIdx++){
        if (orderedTimes[startTimeIdx].startTime == orderedTimes[startTimeIdx + 1].startTime) {
            if (orderedTimes[startTimeIdx].endTime > orderedTimes[startTimeIdx + 1].endTime) {
                //swap the items with the same start time so that the later end time comes after the earlier
                let firstItem = orderedTimes[startTimeIdx]
                orderedTimes[startTimeIdx] = orderedTimes[startTimeIdx + 1]
                orderedTimes[startTimeIdx + 1] = firstItem
            }
        }
    }

    //merges when start time and end time are in order
    for (let meetingIdx = 1; meetingIdx < times.length - 1; meetingIdx++){
        if (times[meetingIdx].endTime > times[meetingIdx + 1].startTime || times[meetingIdx].endTime == times[meetingIdx + 1].startTime) {
            mergedTimes[0].endTime = times[meetingIdx + 1].endTime    
        }
    }
    mergedTimes[0].startTime = times[0].startTime
    console.log(mergedTimes)
    return mergedTimes 
}

//Need to account for when there is a gap between the end time and the subsequent start time 

mergeRanges([
    { startTime: 2, endTime: 4 },
    { startTime: 1, endTime: 3 },
    { startTime: 4, endTime: 13 },
    { startTime: 4, endTime: 12 }
])

module.exports = {mergeRanges}