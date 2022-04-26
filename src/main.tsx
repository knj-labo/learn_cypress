import React from 'react'
import { RecoilRoot } from 'recoil'
import { Router } from '@reach/router'

import { root } from './root'
import App from './App'
import './index.css'


root.render(
    <React.StrictMode>
        <RecoilRoot>
            <Router>
                <App path="/" />
                <App path="/active" />
                <App path="/completed" />
            </Router>
        </RecoilRoot>
    </React.StrictMode>
)
