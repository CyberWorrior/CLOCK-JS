const hoursHTML = document.getElementById('hours')
const minsHTML = document.getElementById('mins')
const secsHTML = document.getElementById('secs')
const ampmHTML  = document.getElementById('met')
const dateHTML = document.getElementById('date')
const monthHTML = document.getElementById('month')
const yearHTML = document.getElementById('year')

const countTime = () =>{
    const currentDate = new Date();
    var hours = currentDate.getHours()
    var mins = currentDate.getMinutes()
    var secs = currentDate.getSeconds()
    var ampm = hours > 12 ? ' PM' : ' AM'

    var date = currentDate.getDate()
    var month = currentDate.getMonth()
    var year = currentDate.getFullYear()
    let stringMonth
    switch(month){
        case 0 : stringMonth='JAN'; break;
        case 1 : stringMonth='FEB'; break;
        case 2 : stringMonth='MAR'; break;
        case 3 : stringMonth='APR'; break;
        case 4 : stringMonth='MAY'; break;
        case 5 : stringMonth='JUN'; break;
        case 6 : stringMonth='JUL'; break;
        case 7 : stringMonth='AUG'; break;
        case 8 : stringMonth='SEP'; break;
        case 9 : stringMonth='OCT'; break;
        case 10 : stringMonth='NOV';break;
        case 11 : stringMonth='DEC'; break;
        default : stringMonth="NA"; break;
    }

    hours= hours % 12
    hours = hours ? hours : 12
    mins = mins < 10 ? '0'+mins: mins;
    secs = secs < 10 ? '0'+secs: secs;
    hours = hours <10 ? '0'+hours: hours;
    hoursHTML.innerHTML = hours
    minsHTML.innerHTML = mins
    secsHTML.innerHTML = secs
    ampmHTML.innerHTML = ampm
    dateHTML.innerHTML = date+' '
    monthHTML.innerHTML = stringMonth+' '
    yearHTML.innerHTML = year
}

countTime()

setInterval(countTime,1000)

