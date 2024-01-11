import './index.css'

import { CountProvider } from './provider';
//import Counter from './counter'
import Counter from './count'

function App() {


  return (
    <CountProvider>
      <div style={{margin:"auto"}}>
        <Counter/>
      </div>

    </CountProvider>
  )
}

export default App
