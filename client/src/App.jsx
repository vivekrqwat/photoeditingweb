import './app.css'
import Leftbar from './components/leftbar/Leftbar'
import Topbar from './components/Topbar/Topbar'
import Gallery from './Gallery/Gallery'

const App = () => {
  return (
    <div className='app'>  <Leftbar>
  </Leftbar>
  <div className="content">
<Topbar>
</Topbar>
<Gallery></Gallery>
  </div>
  </div>

  )
}

export default App