import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Page } from './components/Page'
import { Button } from './stories/Button'

// User 타입 정의
type User = {
    _id: string
    name: string
    email: string
    // 필요한 다른 필드들...
}

const App = () => {
    return (
        <div>
            <Page />
        </div>
    )
}

export default App
