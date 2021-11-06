import React from 'react'
import { Route } from 'react-router-dom'
import BookingDetails from '../BookingDetails'
import ThankYou from '../ThankYou'
import Home from '../Home'

const App = () => (
  <div>
    <main>
      <Route exact path="/confirmation" component={BookingDetails} />
      <Route exact path="/thankyou" component={ThankYou} />
      <Route exact path="/" render={Home} />
    </main>
  </div>
)

export default App
