import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Login from './pages/login';
import Register from './pages/register';
import Notiflix from 'notiflix';

export default function App() {

  let pageContent
  switch (window.location.pathname) {
    case "/":
      pageContent = <Home />
      break;
  
    case "/about":
      pageContent = <About />
      break;

    case "/login":
        pageContent = <Login name={'Nishan'} />
        break;

    case "/register":
          pageContent = <Register />
          break;
  }

  return (
    <>
      <div className="min-h-full">
        
        {pageContent}

      </div>
    </>
  )
}
