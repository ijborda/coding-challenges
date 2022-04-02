// Is the date today

function isToday(date) {
    now = new Date()
    return now.setHours(0,0,0,0) === date.setHours(0,0,0,0)
}