import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Cart from './components/Cart'
import Products from './components/Products'
import Header from './components/Header'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route path="/Cart" component={Cart} />
      <Route path="/Products" component={Products} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
