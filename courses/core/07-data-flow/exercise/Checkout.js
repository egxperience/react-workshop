import React, { useState, useReducer } from 'react'
import { Switch, Route, Redirect, useRouteMatch, useHistory } from 'react-router-dom'
import Centered from 'YesterTech/Centered'

// To run the final solution: Comment this in and the rest out
// import Checkout from './Checkout.final'
// export default Checkout

// Route Targets
import ViewCart from 'YesterTech/ViewCart'
import CheckoutBilling from './CheckoutBilling'
import CheckoutReview from 'YesterTech/CheckoutReview'

function Checkout() {
  const match = useRouteMatch()
  const history = useHistory()

  const [fields, setFields] = useState({})
  const [sameAsBilling, setSameAsBilling] = useState(false)

  function handleBillingSubmit(sameAsBilling, fields) {
    setFields(fields)
    setSameAsBilling(sameAsBilling)
    history.push(`${match.path}/review`)
  }

  return (
    <Centered>
      <Switch>
        <Route path={`${match.path}/cart`} exact>
          <ViewCart />
        </Route>
        <Route path={`${match.path}/billing`}>
          <CheckoutBilling
            onSubmit={handleBillingSubmit}
            defaultFields={fields}
            defaultSameAsBilling={sameAsBilling}
          />
        </Route>

        {Object.keys(fields).length > 0 && (
          <Route path={`${match.path}/review`}>
            <CheckoutReview fields={fields} sameAsBilling={sameAsBilling} />
          </Route>
        )}

        <Redirect to={`${match.path}/cart`} />
      </Switch>
    </Centered>
  )
}

export default Checkout
