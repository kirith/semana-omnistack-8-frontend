import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './pages/Main/Component'
import Login from './pages/Login/Component'

function Routes () {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dev/:id" component={Main} />
    </BrowserRouter>
  )
}

export default Routes