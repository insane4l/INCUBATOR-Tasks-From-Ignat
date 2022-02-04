import React, { ReactElement } from 'react'
import style from './Message.module.css'

function Message(props: MessagePropsType): ReactElement {

    const {avatar, name, message, time} = props

    return (
        <div className={style.wrapper}>
            <div className={style.avatar}> 
                <img className={style.image} src={avatar || 'https://i.pinimg.com/originals/13/a4/11/13a411076cdee39085cad97da215d9be.png'} alt="user_image" />
            </div>

            <div className={style.message}>
                <div className={style.name}> {name} </div>
                <div className={style.text}> {message} </div>
                <div className={style.date}> {time} </div>
            </div>
        </div>
    )
}

export default Message


type MessagePropsType = {
    avatar?: string
    name: string
    message: string
    time: string
}