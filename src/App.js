import { Home, Navbar } from "./components"
import { styles } from "./util/style"

const App = () => {
  return (
    <div className={` bg-primary`}>
       <div className={`${styles.container}`}>
        <Navbar />
        <Home />
       </div>
    </div>
  )
}

export default App


