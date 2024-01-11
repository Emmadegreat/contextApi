import './index.css'

import { CountProvider } from './provider';
//import Counter from './counter'
import Counter from './count'

function App() {


  return (
    <CountProvider>
      <div className="m-auto">
        <Counter/>
      </div>

    </CountProvider>
  )
}

export default App
