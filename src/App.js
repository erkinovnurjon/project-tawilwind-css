import { Billing, Business, CTA, Clients, Contract, Footer, Home, Navbar, Statistics, Testimonials } from "./components"


import { styles } from "./util/style"

const App = () => {
  return (
    <div>
      <div className={` bg-primary`}>
       <div className={`${styles.container}`}>
        <Navbar />
        <Home />
       </div>
    </div>
    <div className={` bg-primary`}>
       <div className={`${styles.container} ${styles.paddingX} `}>
        <Statistics />
        <Contract />
        <Billing />
        <Business />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
       </div>
    </div>
    </div>
  )
}

export default App


