import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tasks from './modules/tasks'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Tasks}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
