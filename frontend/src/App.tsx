import React from 'react'
import './App.css'
import { Page } from './components/2_Body/Page'
import { Header } from './components/1_Headers/Header'
import { Footer } from './components/9_Footers/Footer'

const App = () => {
    return (
        <>
            <Header />
            <Page />
            <Footer />
        </>
    )
}

export default App
