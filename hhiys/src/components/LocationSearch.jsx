import React from 'react'
import axios from 'axios'

const API_KEY = `AIzaSyA69H9t00AiBhrAdZj1JbTLG2br6md1tYo`
const call =   `https://maps.googleapis.com/maps/api/place/textsearch/json?query=mercades+benz+stadium&key=${API_KEY}`
export default class LocationSearch extends React.Component {
    constructor() {
        super();

        this.state = {
            info: [],
            name: [],
            address: [],
            zipcode: [],
        } 
    }

    async getAddress() {
        try {
            const result = await axios.get(call)
            this.setState({ info: result.data.results[0] })
            this.setState({ name: this.state.info.name })
            this.setState({ address: this.state.info.formatted_address })
            var address = this.state.address
            var zipcodeArr = address.match(/(\d+)/g)
            this.setState({ zipcode: zipcodeArr[1] })
            console.log(this.state.zipcode)
            console.log(address)
        } catch {
            console.error( 'something aint right' )
        }
    }

    getZipcode() {
        let newAddress = this.state.address;
        console.log(newAddress)
    }

    componentDidMount() {
        this.getAddress()
        this.getZipcode()
    }


    render() {
        return (
            <div>
                <h1>{ this.state.name }</h1>
                <h1>{ this.state.address }</h1>
            </div>
        )
    }
}
