/** @jsxImportSource @emotion/react */
import './App.css';
import * as React from 'react'
import {Routes, Navigate, Route, BrowserRouter} from 'react-router-dom'
import {DashboardScreen} from './screens/dashboard'
import {MenuScreen} from './screens/menu'
import {LocationsScreen} from './screens/locations'
import {CateringScreen} from './screens/catering'
import {FundraisingScreen} from './screens/fundraising'
import {Footer} from './components/footer'
import {Nav} from './components/navigation'

function App() {
  const [scrollPosition, setScrollPosition] = React.useState(0)

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div 
      className="App"
      css={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <div css={{ flex: '1' }}>
        <BrowserRouter>
          <Nav scrollPosition={scrollPosition}/>
          <AppRoutes/>
        </BrowserRouter>
      </div>
      {/* Force Footer to be at bottom of page */}
      <Footer/>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DashboardScreen/>}/>
      <Route path='/menu' element={<MenuScreen/>}/>
      <Route path='/locations' element={<LocationsScreen/>}/>
      <Route path='/catering' element={<CateringScreen/>}/>
      <Route path='/fundraising' element={<FundraisingScreen/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App;
