import React from 'react'

function Footer(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let timeOfDay
    console.log(hours, minutes)
    // Checks hours for time of day and displays greeting
    if (hours < 12){
        timeOfDay = 'Good Morning!'
    }else if (12 < timeOfDay && timeOfDay < 18) {
        timeOfDay = `Good Afternoon!`
    }else {
        timeOfDay = 'Good Night!'
    }

    //sets clock to standard time
    let clock = `${hours}:${minutes}`
    if (hours > 12){
        clock = `0${hours - 12}:${minutes} `
    } 
    if (minutes < 10){
        clock = `${hours - 12}:${0}${minutes}`
    }
    //refreshes clock every 20 seconds
    function timedRefresh(timeoutPeriod){
        setTimeout('location.reload(true);', timeoutPeriod)
    }
    document.onload = timedRefresh(5000)

    const styles = {color: "purple",backgroundColor: "gold", fontSize: 30}

    return (
        <div>
            <p style={styles}> Woah there! {timeOfDay}</p>
            <p style={styles}>The time is: {clock}</p>
        </div>
       
    )
}

export default Footer