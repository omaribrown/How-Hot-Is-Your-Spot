import React from 'react';
import './App.css';
import CovidSearch from './components/CovidSearch'
import Context from './components/Context'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
// import SideShare from './components/SIdeShare';

export default function App() {
  const [zipcode, setZipcode] = React.useState("");

  return (
    <div className="App">
      <Context.Provider value={{ zipcode, setZipcode }}>
        <NavBar />  
        <CovidSearch />
        {/* <SideShare /> */}
      </Context.Provider>
      <Footer />
    </div>
  );
}

export const ZipcodeContext = React.createContext(null);
