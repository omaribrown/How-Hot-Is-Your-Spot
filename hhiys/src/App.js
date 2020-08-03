import React from 'react';
import './App.css';
import SampleSearch from './components/SampleSearch'
import CovidSearch from './components/CovidSearch'
import Context from './components/Context'
import Footer from './components/Footer'

export default function App() {
  const [zipcode, setZipcode] = React.useState("");

  return (
    <div className="App">
      
      <Context.Provider value={{ zipcode, setZipcode }}>
        <SampleSearch />
        <CovidSearch />
      </Context.Provider>
      <Footer />
    </div>
  );
}

export const ZipcodeContext = React.createContext(null);
