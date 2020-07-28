import React from 'react'
import axios from 'axios'

const API_KEY = `AIzaSyA69H9t00AiBhrAdZj1JbTLG2br6md1tYo`
const call =   `https://maps.googleapis.com/maps/api/place/textsearch/json?query=mercades+benz+stadium&key=${API_KEY}`
export default class LocationSearch extends React.Component {
    constructor() {
        super()

        this.state = {
            info: [],
            lat: [],
            lon: [],
            name: []
        } 
    }

    async getAddress() {
        try {
            const result = await axios.get(call)
            this.setState({ info: result.data })
            console.log( this.state.info )
        } catch {
            console.error( 'something aint right' )
        }
    }

    componentDidMount() {
        this.getAddress()
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
