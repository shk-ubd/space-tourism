import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';


import { ContextProvider } from "./context/spaceContext"

function App() {
  // const [data, setData] = useState(null)
  const [destinations, setDestinations] = useState([])
  const [crew, setCrew] = useState([])
  const [technology, setTechnology] = useState([])
  const [hamburgerDisplay, setHamburgerDisplay] = useState(true)
  const [navigationDisplay, setNavigationDisplay] = useState(false)


  const showNavigation = () => {
    if (window.innerWidth < 768) {
        setHamburgerDisplay(false)
        setNavigationDisplay(true)
    }
}

const hideNavigation = () => {
    if (window.innerWidth < 768) {
        setHamburgerDisplay(true)
        setNavigationDisplay(false)
    }
}

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch("data/data.json")
      const data = await responce.json()
      // setData(data)
      setDestinations(data.destinations)
      setCrew(data.crew)
      setTechnology(data.technology)
      console.log(data);
    }
    fetchData()

  }, []);

  return (
    <>
    <ContextProvider value={{ destinations, crew, technology, hideNavigation, showNavigation, hamburgerDisplay, navigationDisplay}}>
        <Navbar />
        <Outlet />
      </ContextProvider>
    </>
  )
}

export default App
