import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

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
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}

export default App
