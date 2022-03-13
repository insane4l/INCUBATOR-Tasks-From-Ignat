import React, {useEffect, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [altString, setAltString] = useState<string | null>('XX:XX:XX')
    const [displayDate, setDateDisplay] = useState<boolean>(false)

    const stop = () => {
        if (timerId) {
            clearInterval(timerId)
            setAltString('XX:XX:XX') // show text stub
            setTimerId(0) // for disabled status of stop button 
        }
    }

    const start = () => {
        stop()

        setAltString(null) // hide text stub
        setDate(new Date()) // so that there is no delay (1 second)

        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)

        setTimerId(id)
    }



    const onMouseEnter = () => {
        setDateDisplay(true)
    }
    const onMouseLeave = () => {
        setDateDisplay(false)
    }

    const getFormattedDate = (dateNow: Date) => {
        function _transformWithZero(num: number) {
            if (`${num}`.length === 1) return `0${num}`
            return num
        }

        let seconds = _transformWithZero( dateNow.getSeconds() ),
            minutes = _transformWithZero( dateNow.getMinutes() ),
            hours = _transformWithZero( dateNow.getHours() ),
            day = _transformWithZero( dateNow.getDate() ),
            month = _transformWithZero( dateNow.getMonth() + 1),
            year = dateNow.getFullYear()
            
        return {
            time: `${hours}:${minutes}:${seconds}`,
            date: `${day}.${month}.${year}`
        }
    }

    const stringTime = altString || getFormattedDate(date).time
    const stringDate = getFormattedDate(date).date

    return (
        <div>

            <div className={s.clock__screen} >
                <div
                    className={s.clock__time}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>


                {displayDate && (
                    <div className={s.clock__date} >
                        {stringDate}
                    </div>
                )}
            </div>

            <div className={s.buttons__wrapper}>
                <SuperButton disabled={!!timerId} btnStyle='success' onClick={start}>start</SuperButton>
                <SuperButton disabled={!timerId} btnStyle='danger' onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
