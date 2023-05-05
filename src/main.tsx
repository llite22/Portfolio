import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Router from "./components/ui/Router.tsx";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>,
)
