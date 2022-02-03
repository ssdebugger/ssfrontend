import Billing from './billing'
import ProductsInCart from 'components/_pages/cart/productsIncart'
import { LandingLayout } from '@/components/layout/landing'
import { Container } from '@/components/container/regular'
import Footer from '@/components/footer'
const CartPage = () => {


    return (
        <>
        <LandingLayout>
              <ProductsInCart />
        </LandingLayout>
        
       <Footer />
       </>
        )
}

export default CartPage;