import React, { useContext } from 'react'
import axios from 'axios'
import Zipcode from './Context'
import './Styles/CovidSearch.css'
//cases per 1k people


export default function CovidSearch() {
    const data = useContext(Zipcode)
    // const zipParam = 30316;
    // const censusCall = `https://api.census.gov/data/2019/pep/population?get=POP&for=county:*&in=state:*&key=YOUR_KEY_GOES_HERE`

    console.log(data)
    console.log(data.zipcode)

    async function handleZipcode() {
        try {
        const result = await axios.get(`https://localcoviddata.com/covid19/v1/cases/newYorkTimes?zipCode=${data.zipcode}&daysInPast=1`)
        console.log(result.data)
        const countyPositiveCt = await result.data.counties[0].historicData[0].positiveCt
        const countyDeathCt = await result.data.counties[0].historicData[0].deathCt
        const county = await result.data.counties[0]
        alert(`In ${county}, there have been ${countyPositiveCt} cases of Covid-19 confirmed and ${countyDeathCt} deaths`)
        alert(`Showing data collected for ${data.zipcode} by The New York Times.`)
    } catch {
        console.error("something is wrong in covid search")
    }
}

    

        return (
            <div className='main-div'>
                <button onClick={handleZipcode}>
                    Display Nearby Covid-19 Data
                </button>
                <h1>CovidSearch</h1>
                {/* <h1>In {data.zipcode}, there have been {data.countyPositiveCt} cases of Covid-19 confirmed and {data.countyDeathCt}</h1> */}
                {/* <p>Showing data collected for {data.county} by The New York Times.</p> */}
            </div>
        )
    }
