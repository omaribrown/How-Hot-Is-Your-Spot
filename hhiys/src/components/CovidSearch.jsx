import React, { useContext } from 'react'
import axios from 'axios'
import Zipcode from './Context'

// import ZipcodeContext from './SampleSearch'

//cases per 1k people
const zipParam = 30316;
const call = `https://localcoviddata.com/covid19/v1/cases/newYorkTimes?zipCode=30316&daysInPast=1`

export default function CovidSearch() {
    const data = useContext(Zipcode)

    console.log(data)
    console.log(data.zipcode)
    // static contextType = ZipcodeContext

    // componentDidMount() {
    //     const passedObj = this.context
    //     console.log(passedObj)
    // }
    // constructor() {
    //     super()

    //     this.state = {
    //         info: [],
    //     }
    // }

    // async getCases() {
    //     try {
    //         const result = await axios.get(call)
    //         this.setState({ info: result.data })
    //         console.log(this.state.info)
    //     } catch {
    //         console.error("something ain't right")
    //     }
    // }
    
    // componentDidMount() {
    //     this.getCases()
    //     console.log(this.state.info)
    // }

        return (
            <div>
                <h1>CovidSearch</h1>
            </div>
        )
    }


