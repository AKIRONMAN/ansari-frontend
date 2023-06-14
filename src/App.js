import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AfterLoginRoutes from './utils/AfterLoginRoutes'
import * as React from 'react'
import BeforeLoginRoutes from './utils/BeforeLoginRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './pages/Registration';
const App = () => {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route element={<AfterLoginRoutes />}>
                <Route element={<Home/>} path="/" exact/>
            </Route>
            <Route element={<BeforeLoginRoutes />}>
              <Route element={<Login/>} path="/login" exact></Route>
              <Route element={<Registration/>} path="/registration" exact></Route>
            </Route>
          </Routes>
      </Router>
        
    </div>
  );
}

export default App;