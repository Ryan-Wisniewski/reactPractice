import React from 'react'

function Footer(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    console.log(hours)

    if (hours < 12){
        timeOfDay = 'Good Morning!'
    }else if (12 < timeOfDay < 18) {
        timeOfDay = `Good Afternoon!`
    }else {
        timeOfDay = 'Good Night!'
    }

    const styles = {color: "purple",backgroundColor: "gold", fontSize: 30}

    return (
       <p style={styles}> Woah there! {timeOfDay}</p>
    )
}

export default Footer