
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />
        {/*<Home/>*/}
        <div className='flex-grow-1'>
          {/*<RegisterPage />*/}
          <LoginPage/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
