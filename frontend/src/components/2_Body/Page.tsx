/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Header } from '../1_Headers/Header'
import { Button } from '../../stories/Button'
import MongoDB from './Page/MongoDB'

type User = {
    name: string
    email?: string
    password?: string
}

export const Page: React.FC = () => {
    return (
        <>
            <article>
                <Header
                    user={user}
                    onLogin={() => setUser({ name: 'TODO: get github userID' })}
                    onLogout={() => setUser(undefined)}
                    onCreateAccount={() =>
                        setUser({ name: 'get github userName' })
                    }
                />
                <section className="storybook-page">
                    <Button
                        onClick={toggleMongoDB}
                        label="MongoDBのusersリスト"
                    />
                </section>
            </article>
            <div className="storybook-page">
                {isShow && (
                    <div>
                        {/* この部分だけpage stateによって該当するcomponentを呼び出し<MongoDB /> */}
                        <MongoDB />
                    </div>
                )}
            </div>
        </>
    )
}
