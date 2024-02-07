import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tasks from './modules/tasks'
import Test from './modules/test'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Tasks}/>
        <Route path='/test' Component={Test}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
