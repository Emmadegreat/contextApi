import './App.css'

//import Counter from './counter'
import Counter from './count'
import countProvider from './provider';

//import { useState } from 'react'

function App() {


  return (
    <countProvider>
      <div style={{margin:"auto"}}>
        <Counter/>
      </div>

    </countProvider>
  )
}

export default App
