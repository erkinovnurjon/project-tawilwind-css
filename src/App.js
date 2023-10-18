import { Home, Navbar, Statistics } from "./components"
import Billing from "./components/Billing"
import Contract from "./components/Contract"
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
       </div>
    </div>
    </div>
  )
}

export default App


