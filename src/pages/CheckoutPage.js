import React from 'react'
import styled from 'styled-components'
import { PageHero} from '../components'
// extra imports
// import { useCartContext } from '../context/cart_context'
// import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return <main>
  <PageHero title="checkout" />
  <Wrapper className="page">
  <h3 style={{textAlign:"center",marginTop:"20%"}}>Your Order is Placed SuccessFully</h3>
  </Wrapper>
  </main>
}
const Wrapper = styled.div``
export default CheckoutPage
