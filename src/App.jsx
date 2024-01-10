import './App.css'

import { CountProvider } from './provider';
//import Counter from './counter'
import Counter from './count'

//import { useState } from 'react'

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
