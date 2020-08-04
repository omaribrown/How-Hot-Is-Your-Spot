import React, { useContext } from 'react'
import axios from 'axios'
import Zipcode from './Context'
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
        console.log(`positive cases confirmed: ${countyPositiveCt} and confirmed death count: ${countyDeathCt}`)
    } catch {
        console.error("something is wrong in covid search")
    }
}

    

        return (
            <div>
                <button onClick={handleZipcode}>
                    Display nearby cases 
                </button>
                <h1>CovidSearch</h1>
                <h1>In {data.zipcode}, there have been {countyPositiveCt} cases of Covid-19 confirmed and {countyDeathCt}</h1>
                <p>Showing data collected for {counties} by The New York Times.</p>
            </div>
        )
    }


