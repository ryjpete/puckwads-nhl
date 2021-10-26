import React from "react"
import { Router } from "@reach/router"

// components
import Layout from "../components/layout"
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
// import Profile from "../components/Profile/Profile"
import Login from "../components/Login/Login"
import Schedule from './schedule'

const App = () => (
  <Layout>
    <Router>
      <Login path="/app/login" />
      <PrivateRoute
        path='/app/schedule'
        component={Schedule} />
    </Router>
  </Layout>
)

export default App