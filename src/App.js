import { Billing, Business, CTA, Contract, Home, Navbar, Statistics } from "./components"


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
        <CTA />
       </div>
    </div>
    </div>
  )
}

export default App


