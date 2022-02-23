import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './Header'
import RoutesList from './RoutesList'

function HW5() {
    return (
        <div>
            <HashRouter>

                <Header/>
                <RoutesList/>

            </HashRouter>
        </div>
    )
}

export default HW5
