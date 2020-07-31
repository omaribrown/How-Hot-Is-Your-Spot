import React, { Component } from 'react'
import ZipcodeContext from './SampleSearch'

class CovidSearch extends Component {
    static contextType = ZipcodeContext

    componentDidMount() {
        const passedObj = this.context
        console.log(passedObj)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default CovidSearch;
