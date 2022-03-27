import React from 'react'
import './App.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2'
import HW3 from '../../../p2-homeworks/h3/HW3'
import HW4 from '../../../p2-homeworks/h4/HW4'
import HW5 from '../../../p2-homeworks/h5/HW5'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../p2-homeworks/h10/bll/store'

function App() {

    const theme = useSelector((state: AppStateType) => state.theme.currentTheme);


    const appWrapperClassName = `app__wrapper ${theme}_theme`;

    return (
        <div className={appWrapperClassName}>
            <h1>React.js tasks</h1>
            {/* <HW1/>
            <HW2/>
            <HW3/>
            <HW4/> */}
            <HW5/>

        </div>
    )
}

export default App
