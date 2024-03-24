import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Page } from './stories/Page'
import { Button } from './stories/Button'

const App = () => {
    /**
     * example express <-> react
     * */
    const url = 'http://localhost:5001/'
    const api = async () => {
        const response = await fetch(url)
        const jsonData = await response.json()
        console.log('#jsonData = ', jsonData)
    }
    api()

    return (
        <>
            {/* <div className="App">
                <header className="App-header">
                    <p>MERN Project v0.0.1</p>
                </header>
            </div> */}
            <div>
                <Page />
            </div>
        </>
    )
}

export default App
