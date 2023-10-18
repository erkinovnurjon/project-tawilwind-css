import { Home, Navbar, Statistics } from "./components"
import Billing from "./components/Billing"
import Bussines from "./components/Business"
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
        <Bussines />
       </div>
    </div>
    </div>
  )
}

export default App


