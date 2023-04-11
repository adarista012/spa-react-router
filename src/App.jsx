import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import ModularPage from './components/ModularPage'
import HomePage from './components/HomePage'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route 
          path='/' 
          element={<HomePage />}
          />
          <Route 
          path='/atanagildo/:title' 
          element={<ModularPage />}
          />
          <Route 
          path='/ataulfo/:title' 
          element={<ModularPage />}
          />
          <Route 
          path='/ervigio/:title' 
          element={<ModularPage />}
          />
          <Route 
          path='/leovigildo/:title' 
          element={<ModularPage />}
          />
          <Route 
          path='*' 
          element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
