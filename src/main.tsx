import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { root } from './root'
import App from './App'
import { NotFound } from '@/shared/NotFound'
import './index.css'

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App path={'/'} />} />
                    <Route path='/active' element={<App path={'/active'} />} />
                    <Route path='/completed' element={<App path={'/completed'} />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>
)
