import React from 'react';
import './App.css';
import SampleSearch from './components/SampleSearch'
import CovidSearch from './components/CovidSearch'
import { ZipcodeProvider } from './components/SampleSearch'
// import LocationSearch from './components/LocationSearch'
// import SampleSearch from './components/SampleSearch'
// import CovidSearch from './components/CovidSearch'

function App() {
  const testObj = { name: "john" }

  return (
    <div className="App">
      <SampleSearch />
      <ZipcodeProvider value={testObj}>
        <CovidSearch />
      </ZipcodeProvider>
    </div>
  );
}

export default App;
