import React from 'react'
import { RecoilRoot } from 'recoil'
import { Router } from '@reach/router'

import { root } from './root'
import App from './App'
import { NotFound } from './NotFound'
import './index.css'


root.render(
    <React.StrictMode>
        <RecoilRoot>
            <Router>
                <App path="/" />
                <App path="/active" />
                <App path="/completed" />
                <NotFound default/>
            </Router>
        </RecoilRoot>
    </React.StrictMode>
)
