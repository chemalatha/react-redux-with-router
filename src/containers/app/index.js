import React from 'react'
import { Route, Link } from 'react-router-dom'
import BookingDetails from '../BookingDetails'
import ThankYou from '../ThankYou'

const App = () => (
  <div>
    <header>
      <Link to="/confirmation">Booking Details</Link>
      <Link to="/thankyou">Booking Confirmation</Link>
    </header>

    <main>
      <Route exact path="/confirmation" component={BookingDetails} />
      <Route exact path="/thankyou" component={ThankYou} />
    </main>
  </div>
)

export default App
