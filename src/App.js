import React from 'react'
import 'materialize-css'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from "./routes/routes";

function App() {
    const routes = Routes(false)
    return (
        <Router>
            <div className="container">
                {routes}
            </div>
        </Router>
    )
}

export default App
