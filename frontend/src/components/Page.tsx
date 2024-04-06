/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Header } from '../stories/Header'
import { Button } from '../stories/Button'
import MongoDB from './MongoDB'

type User = {
    name: string
    email?: string
    password?: string
}

export const Page: React.FC = () => {
    const [user, setUser] = React.useState<User>()
    const [isShow, setIsShow] = React.useState(false)
    const toggleMongoDB = () => {
        setUser({ name: 'KIM JOOHWAN' })
        setIsShow(true)
    }

    return (
        <>
            <article>
                <Header
                    user={user}
                    onLogin={() => setUser({ name: 'get github userID' })}
                    onLogout={() => setUser(undefined)}
                    onCreateAccount={() =>
                        setUser({ name: 'get github userName' })
                    }
                />
                <section className="storybook-page">
                    <Button onClick={toggleMongoDB} label="Hello World" />
                </section>

                <section className="storybook-page">
                    {isShow && <p>User:{user?.name}</p>}
                </section>
            </article>
            <div className="storybook-page">
                {isShow && (
                    <div>
                        <MongoDB />
                    </div>
                )}
            </div>
        </>
    )
}
