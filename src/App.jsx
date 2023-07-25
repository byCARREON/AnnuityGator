import { Hero, Form, Benefits } from './components/index'
import { FeatureSection } from './sections/index'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Hero />
        <div className="container">
          <div className='grid md:grid-cols-2 mt-10 mb-4 gap-6'>
            <div className='order-1 md:order-2'>
              <Form />
            </div>
            <div className='order-2 md:order-1'>
              <Benefits />
            </div>
          </div>
        </div>

      </div>
      <FeatureSection backgroundColor="#DCF4D9" textColor="black" title="The Annuity Gator Difference" text='Launched in 2012, as the original annuity "investigator", over 180,000 Baby Boomers each year visit our website to gather free retirement tips and trusted annuity advice. Our nationwide network of licensed annuity professionals are independent and not captive or beholden to any one particular insurance company. We have access to hundreds of the top annuities from top-rated companies.' />
    </>
  )
}

export default App
