import React from 'react'

function MainContent(){
    const firstName ="ryan"
    const lastName = 'wisniewski'
    let fullName = `${firstName} ${lastName}`


    return(
        <div>
            <section>
                Section here
            </section>
            <section>
                Hi, Im {fullName}
            </section>
        </div>
    )
}



export default MainContent