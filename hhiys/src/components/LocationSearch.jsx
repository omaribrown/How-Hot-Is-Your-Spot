import React from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const search = `mercades+benz+stadium`
const call =   `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&key=${API_KEY}`
export default class LocationSearch extends React.Component {
    constructor() {
        super();

        this.state = {
            info: [],
            name: [],
            address: [],
            zipcode: [],
            searchbox: [],
            searchSubmitted: false
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
        } catch {
            console.error( 'something aint right with' )
        }
    }

    onSearch = (e) => {
        this.setState({
            searchbox: e.target.value
        })
        
    }

    submitSearch = (e) => {
        e.preventDefault()
        this.setState({
            searchSubmitted: true
        })
        alert("search submitted plaa")
    }

    componentDidMount() {
        this.getAddress()
    }

    render() {
        return (
            <div>
                <h1>{ this.state.name }</h1>
                <h1>{ this.state.address }</h1>
                <form>
                    <input 
                        type='text'
                        value={this.state.searchbox}
                        onChange={this.onSearch}
                    >
                    </input>
                    <p>{this.state.searchbox}</p>
                    <button type='submit' onClick={this.submitSearch}>submit</button>
                </form>
            </div>
        )
    }
}
