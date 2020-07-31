import React from 'react';
import './App.css';
import SampleSearch from './components/SampleSearch'
import CovidSearch from './components/CovidSearch'
import Context from './components/Context'
// import { ZipcodeProvider } from './components/SampleSearch'
// import LocationSearch from './components/LocationSearch'
// import SampleSearch from './components/SampleSearch'
// import CovidSearch from './components/CovidSearch'

export default function App() {
  const [zipcode, setZipcode] = React.useState("");

  return (
    <div className="App">
      <Context.Provider value={{ zipcode, setZipcode }}>
        <SampleSearch />
        <CovidSearch />
      </Context.Provider>
    </div>
  );
}

export const ZipcodeContext = React.createContext(null);
