import React from 'react'
import Login from './Login'


const code = new URLSearchParams(window.location.search).get('code')


 function App() {
  return <Login />
  
}


export default App
