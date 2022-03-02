import React, { ReactElement } from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1(): ReactElement {
    return (
        <div>
            <hr/>
            <section className="hw_section">

                <h3>Homework #1</h3>

                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />

            </section>
            {/* <hr/> */}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/* <hr/> */}
        </div>
    )
}

export default HW1
